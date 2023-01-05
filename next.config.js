/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir:"build",
  reactStrictMode: true,

  publicRuntimeConfig: {
    CYPHERKEY:process.env.CYPHERKEY,
  }

}
 
module.exports =  nextConfig;
