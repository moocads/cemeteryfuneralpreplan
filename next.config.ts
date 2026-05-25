import type { NextConfig } from 'next'

const config: NextConfig = {
  reactStrictMode: true,
  // Avoid dev-only Segment Explorer bundler errors (next-devtools)
  experimental: {
    devtoolSegmentExplorer: false,
  },
}

export default config
