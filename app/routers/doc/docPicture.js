/**
 * @swagger
 * components:
 *   schemas:
 *     picture:
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
 *                   description: The id of the picture
 *                 title:
 *                   type: string
 *                   description: The title of the picture
 *                 url:
 *                   type: string
 *                   description: The url of the picture
 *                 user_id:
 *                   type: integer
 *                   description: The id of the user who posted the picture
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                   description: The timestamp when the picture was created
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *                   description: The timestamp when the picture was last updated
 *       tags:
 *         - name: Picture
 *           description: Picture uploaded by an user
 */

/**
 * @swagger
 * /api/picture/{id}:
 *   get:
 *     summary: Get a picture by id
 *     tags: [picture]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the picture
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Picture'
 *             example:
 *               status: "success"
 *               data:
 *                 result:
 *                   id: 1
 *                   content: "picture 1"
 *                   user_id: 1
 *                   created_at: "2023-06-23T12:47:02.021Z"
 *                   updated_at: null
 */

/**
 * @swagger
 * /api/picture/family/{id}:
 *   get:
 *     summary: Get all pictures from a family by their id
 *     tags: [picture]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the family
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Picture'
 *             example:
 *               status: "success"
 *               data:
 *                 result:
 *                   id: 1
 *                   content: "picture 1"
 *                   user_id: 1
 *                   created_at: "2023-06-23T12:47:02.021Z"
 *                   updated_at: null
 *       404:
 *         description: Not found
 */

/**
 * @swagger
 * /api/picture/add:
 *   post:
 *     summary: Create a new picture
 *     tags: [picture]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the picture
 *               url:
 *                 type: string
 *                 description: The url of the picture
 *               user_id:
 *                 type: integer
 *                 description: The id of the user posting the picture
 *             example:
 *               title: "picture 4"
 *               url: "https://picsum.photos/701/300"
 *               user_id: 1
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Picture'
 *             example:
 *               status: "success"
 *               data:
 *                 result:
 *                   id: 1
 *                   content: "picture 1"
 *                   user_id: 1
 *                   created_at: "2023-06-23T12:47:02.021Z"
 *                   updated_at: null
 *       400:
 *         description: Bad requestBody
 */

/**
 * @swagger
 * /api/picture/{id}/update:
 *   patch:
 *     summary: Update a picture by ID
 *     tags: [picture]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the picture
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: The updated content of the picture
 *               user_id:
 *                 type: integer
 *                 description: The ID of the user updating the picture
 *             example:
 *               content: "Updated picture content"
 *               user_id: 1
 *     responses:
 *       204:
 *         description: No content
 *       400:
 *         description: Bad requestBody
 *       404:
 *         description: picture not found
 */

/**
 * @swagger
 * /api/picture/{id}/delete:
 *   delete:
 *     summary: Delete a picture by ID
 *     tags: [picture]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the picture
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: picture not found
 */
