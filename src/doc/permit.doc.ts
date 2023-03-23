 
 /**
  * @openapi
  * components:
  *  schema:
  *     permitSchema:
  *         type: object
  *         required:
  *             -name:
  *         properties:
  *             name:
  *               type : string
  *               default : edit
  */

 /**
   * @openapi
   * /permit:
   *  get:
   *     tags:
   *     - permits
   *     summary : get permission and that's only for admin
   *     description: Everything about permission
   *     responses:
   *       200:
   *         description: detail about each permission
   */

  /**
   * @openapi
   * /permit :
   *  post :
   *    tags:
   *       - permits
   *    summary : For create a new permission
   *    requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *                $ref: '#/components/schema/permitSchema' 
   *    responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schema/permitSchema'
   *      409:
   *        description: Conflict
   */

  /**
   * @openapi 
   * /permit:
   *  delete:
   *    tags:
   *      - permits
   *    summary: To delete the permission
   *    parameters:
    *          - in: query
    *            description: the id of the permit
    *            required: true
   *    responses:
   *        200:
   *            description: Success
   *            content:
   *                application/json:
   *                  schema:
   *                    $ref: '#/components/schema/permitSchema'
   *        409:
   *           description: Conflict
   */