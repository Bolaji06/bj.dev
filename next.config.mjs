/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx'
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                port: '',
                pathname: '/v0/b/nest-773db.appspot.com/**'
            }
        ]
    }
   
};
const withMDX = createMDX({
    // Add markdown plugins here, as desired
  })
   
  // Merge MDX config with Next.js config
  export default withMDX(nextConfig)
