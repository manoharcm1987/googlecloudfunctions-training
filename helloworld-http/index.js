/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.helloGET = (req, res) => {
  let minVer = process.env.MIN_VER;
  let maxVer = process.env.MAX_VER;
  let hostName = process.env.HOST_NAME;
  res.status(200).send("Function version:" + maxVer + "." + minVer);
};
