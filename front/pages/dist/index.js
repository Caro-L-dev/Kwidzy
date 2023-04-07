"use strict";
exports.__esModule = true;
/**
 * Package Import
 */
var router_1 = require("next/router");
/**
 * Local Import
 */
var atoms_1 = require("@/src/components/atoms");
/**
 * Page
 */
function homePage() {
    /**
     * Routing
     */
    var router = router_1.useRouter();
    /**
     * Actions
     */
    var handleClick = function (path) {
        // if (path === "/categories") {
        //   /**
        //    * Fetch all categories via call to backend
        //    */
        //   axios.get(`http://localhost:3030/categories`)
        //   .then(res => {
        //     let data = res.data;
        //     console.log(data);
        //     let routerData = {
        //       pathname: path,
        //         state: data // your data array of objects
        //     }
        //     router.push(routerData);
        //   });
        // }
        if (path === "/categories") {
            router.push(path);
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "relative mt-56 md:mt-[20%]" },
            React.createElement("div", { className: "flex justify-center" },
                React.createElement(atoms_1.Triangle, { className: "md:hidden", position: "down" })),
            React.createElement("h1", { className: "absolute top-6 right-0 left-0 font-bold text-3xl md:text-6xl mb-8 md:relative md:text-center" }, "KWIDZY")),
        React.createElement(atoms_1.Button, { type: "button", variant: "primary", className: "mt-20 mb-4", rounded: true, onClick: function () { return handleClick("/categories"); } }, "Jouer")));
}
exports["default"] = homePage;
