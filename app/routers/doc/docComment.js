/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           description: The status of the response
 *         data:
 *           type: object
 *           properties:
 *             result:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The id of the comment
 *                 content:
 *                   type: string
 *                   description: The content of the comment
 *                 picture_id:
 *                   type: integer
 *                   description: The id of the picture attached to the comment
 *                 user_id:
 *                   type: integer
 *                   description: The id of the user who posted the comment
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                   description: The timestamp when the comment was created
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *                   description: The timestamp when the comment was last updated
 *       tags:
 *         - name: Comment
 *           description: Comment to a picture
 */

/**
 * @swagger
 * /api/comment/add:
 *   post:
 *     summary: Add a comment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *           example:
 *             content: "C'est une photo de famille"
 *             picture_id: 1
 *             user_id: 1
 *     responses:
 *       '200':
 *         description: Adding a comment to a picture
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *     tags:
 *       - Comment
 */

/**
 * @swagger
 * /api/comment/{id}:
 *   get:
 *     tags:
 *       - Comment
 *     summary: Get a comment by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The comment id
 *     responses:
 *       '200':
 *         description: Getting a comment by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       '404':
 *         description: Comment not found
 */
/**
 * @swagger
 * /api/comment/{id}/delete:
 *   delete:
 *     summary: Delete a comment by id
 *     tags:
 *       - Comment
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The comment id
 *     responses:
 *       '204':
 *         description: The comment was deleted
 *       '404':
 *         description: The comment was not found
 */

/**
 * @swagger
 * /api/comment/{id}/update:
 *   patch:
 *     summary: Update a comment by ID
 *     tags:
 *       - Comment
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The comment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *           example:
 *             content: "C'est une photo de famille"
 *             picture_id: 1
 *             user_id: 1
 *     responses:
 *       '204':
 *         description: The comment was updated
 *       '404':
 *         description: The comment was not found
 */
