/**
 * GET /
 * Homepage
 */
exports.homepage = async (req, res) => {
  const locals = {
    title: "NodeJs Notes",
    description: "Free NodeJS Notes App.",
  };
  res.render("index", {
    locals,
    layout: "../views/layouts/front-page",
  });
};

/**
 * GET /
 * About
 */
exports.about = async (req, res) => {
  const locals = {
    title: "About - NodeJs Notes",
    description: "Free NodeJS Notes App.",
  };
  res.render("about", locals);
};

/**
 * GET /
 * Features
 */
exports.features = async (req, res) => {
  const locals = {
    title: "About - NodeJs Notes",
    description: "Free NodeJS Notes App.",
  };
  res.render("features", locals);
};

/**
 * GET /
 * FAQs
 */
exports.faqs = async (req, res) => {
  const locals = {
    title: "About - NodeJs Notes",
    description: "Free NodeJS Notes App.",
  };
  res.render("faqs", locals);
};
