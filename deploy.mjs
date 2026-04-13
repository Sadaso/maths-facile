import { Client } from 'basic-ftp'
import path from 'path'

const config = {
  host: 'ftp.dola1545.odns.fr',
  user: 'mathsfacile@maths-facile.com',
  password: 'wvD5mv^2SR_F',
  port: 21,
  secure: false,
}

async function deploy() {
  const client = new Client()
  client.ftp.verbose = true

  try {
    console.log('Connecting to FTP...')
    await client.access(config)
    console.log('Connected!')

    // List root to find the right directory
    console.log('\nListing root directory...')
    const list = await client.list('/')
    for (const item of list) {
      console.log(`  ${item.type === 2 ? 'd' : '-'} ${item.name}`)
    }

    // Most shared hosting uses /www or /public_html or /htdocs
    let remoteDir = '/'
    const possibleDirs = ['www', 'public_html', 'htdocs', 'web']
    for (const dir of possibleDirs) {
      const exists = list.some(item => item.name === dir)
      if (exists) {
        remoteDir = '/' + dir
        break
      }
    }

    console.log(`\nUploading to ${remoteDir}...`)

    // Clean old assets first to avoid stale cached chunks
    console.log('Cleaning old assets...')
    try {
      await client.removeDir(remoteDir + '/assets')
      console.log('Old assets removed.')
    } catch (e) {
      console.log('No old assets to remove (or error):', e.message)
    }

    // Upload entire dist folder (overwrite existing files)
    await client.ensureDir(remoteDir)
    await client.uploadFromDir(path.resolve('dist'))

    console.log('\n✅ Deploy complete!')
    console.log('Site live at: https://maths-facile.com')

  } catch (err) {
    console.error('❌ Error:', err.message)
  } finally {
    client.close()
  }
}

deploy()
