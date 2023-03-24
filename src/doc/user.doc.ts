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
 * components:
 *   schema:
 *     userLoginSchema:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: email of the user
 *         password:
 *           type: string
 *           description: password of the user
 *       example:
 *         email: naytoe@gmail.com
 *         password: blablabla
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
   *     description: Everything about each user
   *     summary: get each user
   *     parameters:
*            - in: query
*              description: the id of the user
*              required: true
   *     responses:
   *       200:
   *         description: detail about each DeviceDevice
   */


 /**
   * @openapi
   * /user/admin:
   *  get:
   *     tags: [User]
   *     description: Everything about user by admin
   *     summary: get all user or each
   *     responses:
   *       200:
   *         description: detail about each DeviceDevice
   */

   /**
   * @openapi
   * /user/register :
   *  post :
   *    tags: [User]
   *    summary : For create a user
   *    requestBody:
   *        required: true
   *        content:
   *            application/json:
   *                schema:
   *                    $ref: '#/components/schema/userSchema' 
   *    responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schema/userSchema'
   *      409:
   *        description: Conflict
   */

  /**
   * @openapi
   * /user/login :
   *  post :
   *    tags: [User]
   *    summary : For login user
   *    requestBody:
   *        required: true
   *        content:
   *            application/json:
   *                schema:
   *                    $ref: '#/components/schema/userLoginSchema' 
   *    responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schema/userLoginSchema'
   *      409:
   *        description: Conflict
   */

  /**
   * @openapi 
   * /user:
   *  delete:
   *    tags: [User]
   *    summary: To delete the user
   *    parameters:
    *          - in: query
    *            description: the id of the user
    *            required: true
   *    responses:
   *        200:
   *            description: Success
   *            content:
   *                application/json:
   *                  schema:
   *                    $ref: '#/components/schema/userSchema'
   *        409:
   *           description: Conflict
   */


  /**
   * @openapi 
   * /user:
   *  patch:
   *    tags: [User]
   *    summary: To update the user
   *    parameters:
    *          - in: query
    *            description: the id of the user
    *            required: true
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            $ref: '#/components/schema/userSchema'
   *    responses:
   *        200:
   *            description: Success
   *            content:
   *                application/json:
   *                  schema:
   *                    $ref: '#/components/schema/userSchema'
   *        409:
   *           description: Conflict
   */


  //user Add device
    /**
     * @swagger
     * components:
     *   schema:
     *     useraddDeviceSchema:
     *       type: object
     *       required:
     *         - userId
     *         - deviceId
     *       properties:
     *         userId:
     *           type: string
     *           description: Id of the user
     *         deviceId:
     *           type: string
     *           description: Id of the user
     *       example:
     *         userId: 90wqenfisddo3
     *         deviceId: ao49urjf903aaa23
     */

  /**
   * @openapi 
   * /user/add/device:
   *  patch:
   *    tags: [User]
   *    summary: To update the user
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            $ref: '#/components/schema/useraddDeviceSchema'
   *    responses:
   *        200:
   *            description: Success
   *            content:
   *                application/json:
   *                  schema:
   *                    $ref: '#/components/schema/userSchema'
   *        409:
   *           description: Conflict
   */


    /**
   * @openapi 
   * /user/remove/device:
   *  patch:
   *    tags: [User]
   *    summary: To update the user
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            $ref: '#/components/schema/useraddDeviceSchema'
   *    responses:
   *        200:
   *            description: Success
   *            content:
   *                application/json:
   *                  schema:
   *                    $ref: '#/components/schema/userSchema'
   *        409:
   *           description: Conflict
   */

    //role add user
    /**
     * @swagger
     * components:
     *   schema:
     *     useraddRoleSchema:
     *       type: object
     *       required:
     *         - userId
     *         - roleId
     *       properties:
     *         userId:
     *           type: string
     *           description: Id of the user
     *         roleId:
     *           type: string
     *           description: Id of the role
     *       example:
     *         userId: 90wqenfisddo3
     *         roleId: ao49urjf903aaa23
     */

      /**
   * @openapi 
   * /user/add/role:
   *  patch:
   *    tags: [User]
   *    summary: To update the user
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            $ref: '#/components/schema/useraddRoleSchema'
   *    responses:
   *        200:
   *            description: Success
   *            content:
   *                application/json:
   *                  schema:
   *                    $ref: '#/components/schema/userSchema'
   *        409:
   *           description: Conflict
   */


    /**
   * @openapi 
   * /user/remove/role:
   *  patch:
   *    tags: [User]
   *    summary: To update the user
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            $ref: '#/components/schema/useraddRoleSchema'
   *    responses:
   *        200:
   *            description: Success
   *            content:
   *                application/json:
   *                  schema:
   *                    $ref: '#/components/schema/userSchema'
   *        409:
   *           description: Conflict
   */



        //permit add user
    /**
     * @swagger
     * components:
     *   schema:
     *     useraddPermitSchema:
     *       type: object
     *       required:
     *         - userId
     *         - permitId
     *       properties:
     *         userId:
     *           type: string
     *           description: Id of the user
     *         permitId:
     *           type: string
     *           description: Id of the permit
     *       example:
     *         userId: 90wqenfisddo3
     *         permitId: ao49urjf903aaa23
     */

      /**
   * @openapi 
   * /user/add/permit:
   *  patch:
   *    tags: [User]
   *    summary: To update the user
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            $ref: '#/components/schema/useraddPermitSchema'
   *    responses:
   *        200:
   *            description: Success
   *            content:
   *                application/json:
   *                  schema:
   *                    $ref: '#/components/schema/userSchema'
   *        409:
   *           description: Conflict
   */


    /**
   * @openapi 
   * /user/remove/permit:
   *  patch:
   *    tags: [User]
   *    summary: To update the user
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            $ref: '#/components/schema/useraddPermitSchema'
   *    responses:
   *        200:
   *            description: Success
   *            content:
   *                application/json:
   *                  schema:
   *                    $ref: '#/components/schema/userSchema'
   *        409:
   *           description: Conflict
   */