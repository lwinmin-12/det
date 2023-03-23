 
 /**
  * @openapi
  * components:
  *  schema:
  *     roleSchema:
  *         type: object
  *         required:
  *             -name:
  *         properties:
  *             name:
  *               type : string
  *               default : edit
  *             permits:
  *                 type: array
  *                 default: ['234534534' ,'234534543']
  */

 /**
   * @openapi
   * /role:
   *  get:
   *     tags:
   *     - roles
   *     summary : get permission and that's only for admin
   *     description: Everything about permission
   *     responses:
   *       200:
   *         description: detail about each permission
   */

  /**
   * @openapi
   * /role :
   *  post :
   *    tags:
   *       - roles
   *    summary : For create a new permission
   *    requestBody:
   *        required: true
   *        content:
   *            application/json:
   *              schema:
   *                $ref: '#/components/schema/roleSchema' 
   *    responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schema/roleSchema'
   *      409:
   *        description: Conflict
   */

  /**
   * @openapi 
   * /role:
   *  delete:
   *    tags:
   *      - roles
   *    summary: To delete the role
   *    parameters:
    *          - in: query
    *            description: the id of the role
    *            required: true
   *    responses:
   *        200:
   *            description: Success
   *            content:
   *                application/json:
   *                  schema:
   *                    $ref: '#/components/schema/roleSchema'
   *        409:
   *           description: Conflict
   */


  /**
   * @openapi 
   * /role:
   *  patch:
   *    tags:
   *      - roles
   *    summary: To update the permission
   *    parameters:
    *          - in: query
    *            description: the id of the role
    *            required: true
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            $ref: '#/components/schema/roleSchema'
   *    responses:
   *        200:
   *            description: Success
   *            content:
   *                application/json:
   *                  schema:
   *                    $ref: '#/components/schema/roleSchema'
   *        409:
   *           description: Conflict
   */

  /**
   * @openapi 
   * /role/add/premit:
   *  patch:
   *    tags:
   *      - roles
   *    summary: add role in permission
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *              required:
   *                  - roleId:
   *                  - permitId
   *              properties:
   *                  roleId:
   *                      type: string
   *                  permitId:
   *                      type: string
   *              example:
   *                  roleId: 48u129344
   *                  permitId: 38437539fdf
   *    responses:
   *        200:
   *            description: Success
   *            content:
   *                application/json:
   *                  schema:
   *                    $ref: '#/components/schema/roleSchema'
   *        409:
   *           description: Conflict
   */

    /**
   * @openapi 
   * /role/remove/premit:
   *  patch:
   *    tags:
   *      - roles
   *    summary: remove role in permission
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *              required:
   *                  - roleId:
   *                  - permitId
   *              properties:
   *                  roleId:
   *                      type: string
   *                  permitId:
   *                      type: string
   *              example:
   *                  roleId: 48u129344
   *                  permitId: 38437539fdf
   *    responses:
   *        200:
   *            description: Success
   *            content:
   *                application/json:
   *                  schema:
   *                    $ref: '#/components/schema/roleSchema'
   *        409:
   *           description: Conflict
   */