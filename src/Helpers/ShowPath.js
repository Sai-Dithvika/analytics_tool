const isShowPath = (path) => {
   return (
    path === "/user-page" ||
    path === "/demographic-data" ||
    path === "/form-data" ||
    path === "/bounce-rate"
   );
};

export default isShowPath;