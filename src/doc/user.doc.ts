/**
 * @swagger
 * components:
 *   schema:
 *     userSchema:
 *       type: object
 *       required:
 *         - email
 *         - phone
 *         - name
 *         - password
 *         - image
 *         - userId
 *         - userDevice
 *         - roles
 *         - permits
 *       properties:
 *         name:
 *           type: string
 *           description: name of the user
 *         phone:
 *           type: string
 *           description: phone number of the user
 *         email:
 *           type: string
 *           description: email of the user
 *         password:
 *           type: string
 *           description: password of the user
 *         image:
 *            type: string
 *            description: the link of the image
 *         userId:
 *            type: string
 *            description: the id of the user
 *         userDevice:
 *            type: array
 *            description: the collection of the device that user own
 *         roles:
 *             type: array
 *             description: the role of the user own
 *         permits:
 *             type: array
 *             description: the permission of the user own
 *       example:
 *         name: Nay toe
 *         phone: 099348345
 *         email: naytoe@gmail.com
 *         password: blablabla
 *         image: ./image/naytoe11
 *         userId: 34034os83i09
 *         userDevice: []
 *         roles: []
 *         permits: []
 */

 /**
  * @swagger
  * tags:
  *   name: User
  *   description: User managing API for admin and user
  */


  /**
   * @openapi
   * /user:
   *  get:
   *     tags: [User]
   *     description: Everything about user
   *     summary: get each user
   *     responses:
   *       200:
   *         description: detail about each DeviceDevice
   */