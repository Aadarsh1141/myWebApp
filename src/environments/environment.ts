// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  //LOGIN: 'https://testrm.getquickride.com:8080/dishaapiserver/rest/qpa/user/login',
  LOGIN: '/login',
  //SIGNUP: 'https://ridemgmtserverip:443/dishaapiserver/rest/qpa/user',
  SIGNUP: '/user',
  ACTIVATE_USER: '/activateuser',
  RESEND_CODE: '/resend',
  REFERRAL_CODE: '/referralcode',
  SAVE_IMAGE: '/image',
  VEHICAL: '/vehical',
  RIDE_MGMT: '/ridemgmt1',
  RIDE_CONNECTIVITY: '/ridecoonectivity',
  ROUTE_MATCHSERVER:'/routematchserver1',
  PASSANGER_ROUTE_MATCHSERVER:'/passangerRoutematchserver',
  RIDE_CONN:'/rideConnectvity',
  RIDEMGM:'/ridemgmt',
  USERMGMT:'/userMgmt',
  ROUTE_REPOSITORY:'/routerepository',
  BILLING:'/billing',
  FAV_PARTNER:'/favouritepartner',
  COMMON:'/commonAPI'

 /* LOGIN: 'http://localhost/login',
  SIGNUP: 'http://localhost/user',
  ACTIVATE_USER: 'http://localhost/activateuser',
  RESEND_CODE: 'http://localhost/resend',
  REFERRAL_CODE: 'http://localhost/referralcode',
  SAVE_IMAGE: 'http://localhost/image',
  VEHICAL: 'http://localhost/vehical',
  RIDE_MGMT: 'http://localhost/ridemgmt1',
  RIDE_CONNECTIVITY: 'http://localhost/ridecoonectivity',
  ROUTE_MATCHSERVER:'http://localhost/routematchserver1',
  PASSANGER_ROUTE_MATCHSERVER:'http://localhost/passangerRoutematchserver',
  RIDE_CONN:'http://localhost/rideConnectvity',
  RIDEMGM:'http://localhost/ridemgmt',
  USERMGMT:'http://localhost/userMgmt',
  ROUTE_REPOSITORY:'http://localhost/routerepository'*/
};