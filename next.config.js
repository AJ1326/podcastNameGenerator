/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: '/deploy',
        destination: '/',
        permanent: false,
      },
    ];
  },
};
