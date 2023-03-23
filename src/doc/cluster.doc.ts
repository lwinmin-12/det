/**
 * @swagger
 * components:
 *   schema:
 *     clusterSchema:
 *       type: object
 *       required:
 *         - name
 *         - status
 *         - condition
 *       properties:
 *         name:
 *           type: string
 *           description: name of the cluster
 *         status:
 *           type: string
 *           description: level of the water 
 *         condition:
 *           type: string
 *           description: conditon of the tank's motor
 *       example:
 *         name: upper tank
 *         status: low
 *         condition: stop
 */

 /**
  * @swagger
  * tags:
  *   name: Cluster
  *   description: The Cluster managing API for admin
  */

  /**
   * @openapi
   * /cluster:
   *  get:
   *     tags: [Cluster]
   *     description: Everything about Cluster
   *     summarry: get each cluster
   *     responses:
   *       200:
   *         description: detail about each Cluster
   */

  /**
   * @openapi
   * /cluster/admin:
   *  get:
   *     tags: [Cluster]
   *     description: Everything about Cluster
   *     summarry: get each cluster
   *     responses:
   *       200:
   *         description: detail about each Cluster
   */

  /**
   * @openapi
   * /cluster :
   *  post :
   *    tags: [Cluster]
   *    summary : For create a new cluster
   *    requestBody:
   *        required: true
   *        content:
   *            application/json:
   *                schema:
   *                    $ref: '#/components/schema/clusterSchema' 
   *    responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schema/clusterSchema'
   *      409:
   *        description: Conflict
   */

  /**
   * @openapi 
   * /cluster:
   *  delete:
   *    tags: [Cluster]
   *    summary: To delete the cluster
   *    parameters:
    *          - in: query
    *            description: the id of the cluster
    *            required: true
   *    responses:
   *        200:
   *            description: Success
   *            content:
   *                application/json:
   *                  schema:
   *                    $ref: '#/components/schema/clusterSchema'
   *        409:
   *           description: Conflict
   */

  /**
   * @openapi 
   * /cluster:
   *  patch:
   *    tags: [Cluster]
   *    summary: To update the cluster
   *    parameters:
    *          - in: query
    *            description: the id of the cluster
    *            required: true
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            $ref: '#/components/schema/clusterSchema'
   *    responses:
   *        200:
   *            description: Success
   *            content:
   *                application/json:
   *                  schema:
   *                    $ref: '#/components/schema/clusterSchema'
   *        409:
   *           description: Conflict
   */