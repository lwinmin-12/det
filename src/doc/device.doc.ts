/**
 * @swagger
 * components:
 *   schema:
 *     deviceSchema:
 *       type: object
 *       required:
 *         - deviceId
 *         - serialNo
 *         - name
 *         - deviceCondition
 *         - mode
 *         - clusters
 *       properties:
 *         name:
 *           type: string
 *           description: name of the device
 *         serialNo:
 *           type: string
 *           description: serial number of the device
 *         deviceId:
 *           type: string
 *           description: The id of the device
 *         deviceCondition:
 *           type: boolean
 *           description: condition of the devcie that you can run or not
 *         mode:
 *            type: string
 *            description: this can be auto and manual
 *         clusters:
 *            type: array
 *            description: that is the collection of cluster's information
 *       example:
 *         name: water flow controller
 *         serialNo: fweio3409s
 *         deviceId: tps09093489001
 *         deviceCondition: true
 *         mode: auto
 *         cluster: []
 */

 /**
  * @swagger
  * tags:
  *   name: Devices
  *   description: The Device managing API for admin and user
  */

   /**
   * @openapi
   * /device:
   *  get:
   *     tags: [Devices]
   *     description: Everything about Device
   *     summarry: get each DeviceDevice
   *     responses:
   *       200:
   *         description: detail about each DeviceDevice
   */

   /**
   * @openapi
   * /device/admin:
   *  get:
   *     tags: [Devices]
   *     description: Everything about Device
   *     summary: for get all device by admin
   *     summarry: get each DeviceDevice
   *     responses:
   *       200:
   *         description: detail about each DeviceDevice
   */

  /**
   * @openapi
   * /device :
   *  post :
   *    tags: [Devices]
   *    summary : For create a new Device
   *    requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *                $ref: '#/components/schema/deviceSchema' 
   *    responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schema/deviceSchema'
   *      409:
   *        description: Conflict
   */

    /**
   * @openapi 
   * /device:
   *  delete:
   *    tags: [Devices]
   *    summary: To delete the device
   *    parameters:
    *          - in: query
    *            description: the id of the device
    *            required: true
   *    responses:
   *        200:
   *            description: Success
   *            content:
   *                application/json:
   *                  schema:
   *                    $ref: '#/components/schema/deviceSchema'
   *        409:
   *           description: Conflict
   */

  /**
   * @openapi 
   * /devices:
   *  patch:
   *    tags: [Devices]
   *    summary: To update the device
   *    parameters:
    *          - in: query
    *            description: the id of the device
    *            required: true
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            $ref: '#/components/schema/deviceSchema'
   *    responses:
   *        200:
   *            description: Success
   *            content:
   *                application/json:
   *                  schema:
   *                    $ref: '#/components/schema/deviceSchema'
   *        409:
   *           description: Conflict
   */

    /**
   * @openapi 
   * /device/add/cluster:
   *  patch:
   *    tags: [Devices]
   *    summary: add cluster in device
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *              required:
   *                  - deviceId:
   *                  - clusterId
   *              properties:
   *                  deviceId:
   *                      type: string
   *                  clusterId:
   *                      type: string
   *              example:
   *                  deviceId: 48u129344
   *                  clusterId: 38437539fdf
   *    responses:
   *        200:
   *            description: Success
   *            content:
   *                application/json:
   *                  schema:
   *                    $ref: '#/components/schema/deviceSchema'
   *        409:
   *           description: Conflict
   */


  /**
   * @openapi 
   * /device/remove/cluster:
   *  patch:
   *    tags: [Devices]
   *    summary: remove cluster from device
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *              required:
   *                  - deviceId:
   *                  - clusterId
   *              properties:
   *                  deviceId:
   *                      type: string
   *                  clusterId:
   *                      type: string
   *              example:
   *                  deviceId: 48u129344
   *                  clusterId: 38437539fdf
   *    responses:
   *        200:
   *            description: Success
   *            content:
   *                application/json:
   *                  schema:
   *                    $ref: '#/components/schema/deviceSchema'
   *        409:
   *           description: Conflict
   */