/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['img.clerk.com']
    },
    experimental: {
        runtime: 'nodejs',  // Ensure this is set to 'nodejs' instead of 'edge'
    }
}

module.exports = nextConfig
