import React from "react";
// import Layout from '@/tempalte/Layout';
import "@/styles/styles.scss";
import "@/styles/framework/framework.scss";

const Framework = () => {
  const colors = [
    {
      var: "white",
      color: "#FFFFFF",
    },
    {
      var: "black",
      color: "#000000",
    },
    {
      var: "dark",
      color: "#020A12",
    },
    {
      var: "dark-blue",
      color: "#092440",
    },
    {
      var: "green",
      color: "#6FBE49",
    },
    {
      var: "green-light",
      color: "#EDFFE2",
    },
    {
      var: "text",
      color: "#2B3641",
    },
    {
      var: "grey",
      color: "#CECECE",
    },
    {
      var: "bg-grey",
      color: "#EAEAEA",
    },
    {
      var: "border",
      color: "#E0E0E0",
    },
    {
      var: "link",
      color: "#2D9CDB",
    },
    {
      var: "transp",
      color: "rgba(255, 255, 255, 0)",
    },
  ];

  const sizes = [
    {
      var: "wrap",
      size: "1438px",
    },
    {
      var: "gap-desk",
      size: "146px",
    },
    {
      var: "gap-tabl",
      size: "40px",
    },
    {
      var: "gap-mob",
      size: "16px",
    },
    {
      var: "halfGap-desk",
      size: "calc($gap-desk / 2)",
    },
    {
      var: "halfGap-tabl",
      size: "calc($gap-tabl / 2)",
    },
    {
      var: "halfGap-mob",
      size: "calc($gap-mob / 2)",
    },
    {
      var: "header-h-desk",
      size: "72px",
    },
    {
      var: "header-h-tabl",
      size: "58px",
    },
    {
      var: "header-h-mob",
      size: "50px",
    },
  ];

  const transitions = [
    {
      var: "tr-mode-default",
      value: "cubic-bezier(0.65, 0, 0.35, 1)",
    },
  ];

  return (
    // <Layout>
    //   {
    //       commonData =>
    //         <>
    <div className={"az-framework"}>
      <div className={"az-wrap"}>
        <p className={"az-h1 az-txt-center az-txt-up"}>Framework</p>
        <div className={"az-framework-block"}>
          <hr />
          <p className={"az-reg"}>Sizes</p>
          <hr />
          <ul className="ct-lead az-framework-sizes">
            {sizes.map((size) => {
              return (
                <li key={size.size}>
                  <strong>${size.var}:&#160;</strong>
                  {size.size};
                </li>
              );
            })}
          </ul>
        </div>
        <div className={"az-framework-block"}>
          <hr />
          <p className={"az-reg"}>Colors</p>
          <hr />
          <ul className="ct-lead az-framework-colors">
            {colors.map((color) => {
              return (
                <li key={color.color}>
                  <span style={{ backgroundColor: color.color }}></span>
                  <strong>${color.var}:&#160;</strong>
                  {color.color};
                </li>
              );
            })}
          </ul>
        </div>
        <div className={"az-framework-block"}>
          <hr />
          <p className={"az-reg"}>Typography</p>
          <hr />
          <h1 className={"az-h1"}>.az-h1 - 42/28px</h1>
          <h2 className={"az-h2"}>.az-h2 - 36/24px</h2>
          <h3 className={"az-h3"}>.az-h3 - 24/20px</h3>
          <h4 className={"az-h4"}>.az-h4 - 22/18px</h4>
          <h5 className={"az-h5"}>.az-h5 - 20/16px</h5>
          <p className={"az-lead"}>.za-lead - 18/15px</p>
          <p className={"az-lead-2"}>.za-lead-2 - 24/18px</p>
          <p className={"az-reg"}>.za-reg - 16/14px</p>
          <p className={"az-small"}>.az-small - 12px</p>
        </div>

        <div className={"az-framework-block"}>
          <hr />
          <p className={"az-reg"}>Others</p>
          <hr />
          <p className={"az-txt-center"}>.az-txt-center</p>
          <p className={"az-txt-up"}>.az-txt-upper</p>
          <p className={"az-txt-thin"}>.az-txt-thin</p>
          <a className={"az-link"} href="#link" target="_blank">
            .az-link
          </a>
        </div>

        <div className={"az-framework-block"}>
          <hr />
          <p className={"az-reg"}>Text colors</p>
          <hr />
          <p className={"az-white"} style={{ background: "#ccc" }}>
            .az-white
          </p>
          <p className={"az-text"}>.az-text</p>
          <p className={"az-green"}>.az-green</p>
          <p className={"az-grey"}>.az-grey</p>
        </div>

        <div className={"az-framework-block"}>
          <hr />
          <p className={"az-reg"}>Transitions mode</p>
          <hr />
          <ul className="ct-lead az-framework-transitions">
            {transitions.map((item) => {
              return (
                <li key={item.value}>
                  <span>
                    <strong>${item.var}:&#160;</strong>
                  </span>
                  <i style={{ transitionTimingFunction: item.value }}>
                    {item.value};
                  </i>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
    //         </>
    //   }
    // </Layout>
  );
};

export default Framework;
