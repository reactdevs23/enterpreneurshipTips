import InitialPage from "./components/InitialPage/InitialPage";
import MainComponent from "./components/MainComponent/MainComponent";

import { img1, img2 } from "./images";
import Star from "./images/Star";
import Sun from "./images/Sun";

//  font-family: "Poppins", sans-serif;
//  font-family: "Inter", sans-serif;
function App() {
  const initialPage = {
    headerFontFamily: "'Big Shoulders Display', sans-serif",
    bodyFontFamily: "'Be Vietnam Pro', sans-serif",
    link: "www.realygreatsite.com",
    img: img1,
    heading: "Enterpreneurship Tips Article",
    title: "Unlocking Success <br/> in Business",
    primaryTextColor: "#000",
    secondaryTextColor: "#fff",
    background: "#376D71",
  };
  const allData = {
    headerFontFamily: "'Big Shoulders Display', sans-serif",
    bodyFontFamily: "'Be Vietnam Pro', sans-serif",
    primaryTextColor: "#000",
    secondaryTextColor: "#fff",
    data: [
      {
        headingInfo: {
          heading: "Identify Your Passion",
          headingIcon: <Sun color="#94c5c9" />,
          headingBg: "#94C5C9",
        },
        info: "The significance of pursuing one's passion in entrepreneurship is multifaceted and can profoundly impact an entrepreneur's journey and the success of their business.",

        img: img2,
        bottomLeftIcon: <Star color="#94c5c9" />,

        background: "#376D71",
      },
      {
        headingInfo: {
          heading: "Market Research",
          headingIcon: <Sun color="#94c5c9" />,
          headingBg: "#94C5C9",
        },
        title: "",
        info: "Market research plays a pivotal role in entreneurship by providing valuable insights into your target audience.",
        task: {
          background: "#fff",
          taskList: [
            "Identifying Customer Needs and Preferences",
            "Minimizing Risk",
            "Segmentation",
            "Competitive Analysis",
            "Market Size and Potential",
            "Product Development",
          ],
        },
        img: img2,
        bottomLeftIcon: <Star color="#94c5c9" />,
        topRightIcon: <Star color="#94c5c9" />,

        background: "#376D71",
      },
      {
        headingInfo: {
          heading: "Business Plan",
          headingIcon: <Sun color="#94c5c9" />,
          headingBg: "#94C5C9",
        },
        title: "Crafting a Solid Business",
        info: "A succesful business plan is a comprehensive document that outlines a company's goals, strategies,and operational procedures. It serves as a roadmap for the business and is essential for attracting investors,guiding internal decision-making,and ensuring the business's long-term viability.",

        img: img2,
        bottomLeftIcon: <Star color="#94c5c9" />,

        background: "#376D71",
      },
      {
        headingInfo: {
          heading: "Financial Management",
          headingIcon: <Sun color="#94c5c9" />,
          headingBg: "#94C5C9",
        },
        title: "",
        info: "A succesful business plan is a comprehensive document that outlines a company's goals, strategies,and operational procedures. It serves as a roadmap for the business and is essential for attracting investors,guiding internal decision-making,and ensuring the business's long-term viability.",

        img: img2,
        topRightIcon: <Star color="#94c5c9" />,

        background: "#376D71",
      },
      {
        headingInfo: {
          heading: "Build a strong network",
          headingIcon: <Sun color="#94c5c9" />,
          headingBg: "#94C5C9",
        },
        title: "Networking for Success",
        info: "A succesful business plan is a comprehensive document that outlines a company's goals, strategies,and operational procedures. It serves as a roadmap for the business and is essential for attracting investors,guiding internal decision-making,and ensuring the business's long-term viability.",

        img: img2,
        bottomLeftIcon: <Star color="#94c5c9" />,

        background: "#376D71",
      },
      {
        headingInfo: {
          heading: "Stay Persistent",
          headingIcon: <Sun color="#94c5c9" />,
          headingBg: "#94C5C9",
        },
        title: "",
        info: "A succesful business plan is a comprehensive document that outlines a company's goals, strategies,and operational procedures. It serves as a roadmap for the business and is essential for attracting investors,guiding internal decision-making,and ensuring the business's long-term viability.",
        email: "@reallygreatsite",
        img: img2,
        bottomLeftIcon: <Star color="#94c5c9" />,

        background: "#376D71",
      },
    ],
  };
  return (
    <>
      <InitialPage {...initialPage} />
      {allData.data.map((el, i) => (
        <MainComponent
          {...el}
          id={i + 1}
          headerFontFamily={allData.headerFontFamily}
          bodyFontFamily={allData.bodyFontFamily}
          primaryTextColor={allData.primaryTextColor}
          secondaryTextColor={allData.secondaryTextColor}
          key={i}
          totalData={allData.data.length}
        />
      ))}
    </>
  );
}

export default App;
