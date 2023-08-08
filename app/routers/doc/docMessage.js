/**
 * @swagger
 * components:
 *   schemas:
 *     Message:
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
 *                   description: The id of the message
 *                 content:
 *                   type: string
 *                   description: The content of the message
 *                 user_id:
 *                   type: integer
 *                   description: The id of the user who posted the message
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                   description: The timestamp when the message was created
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *                   description: The timestamp when the message was last updated
 *       tags:
 *         - name: Message
 *           description: Message from a user on the message board
 */

/**
 * @swagger
 * /api/message/{id}:
 *   get:
 *     summary: Get a message by id
 *     tags: [Message]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the message
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 *             example:
 *               status: "success"
 *               data:
 *                 result:
 *                   id: 1
 *                   content: "Message 1"
 *                   user_id: 1
 *                   created_at: "2023-06-23T12:47:02.021Z"
 *                   updated_at: null
 */

/**
 * @swagger
 * /api/message/family/{id}:
 *   get:
 *     summary: Get all messages from a family by their id
 *     tags: [Message]
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
 *               $ref: '#/components/schemas/Message'
 *             example:
 *               status: "success"
 *               data:
 *                 result:
 *                   id: 1
 *                   content: "Message 1"
 *                   user_id: 1
 *                   created_at: "2023-06-23T12:47:02.021Z"
 *                   updated_at: null
 *       404:
 *         description: Not found
 */

/**
 * @swagger
 * /api/message/add:
 *   post:
 *     summary: Create a new message
 *     tags: [Message]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: The content of the message
 *               user_id:
 *                 type: integer
 *                 description: The id of the user posting the message
 *             example:
 *               content: "Message 4"
 *               user_id: 1
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 *             example:
 *               status: "success"
 *               data:
 *                 result:
 *                   id: 1
 *                   content: "Message 1"
 *                   user_id: 1
 *                   created_at: "2023-06-23T12:47:02.021Z"
 *                   updated_at: null
 *       400:
 *         description: Bad requestBody
 */

/**
 * @swagger
 * /api/message/{id}/update:
 *   patch:
 *     summary: Update a message by ID
 *     tags: [Message]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the message
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
 *                 description: The updated content of the message
 *               user_id:
 *                 type: integer
 *                 description: The ID of the user updating the message
 *             example:
 *               content: "Updated message content"
 *               user_id: 1
 *     responses:
 *       204:
 *         description: No content
 *       400:
 *         description: Bad requestBody
 *       404:
 *         description: Message not found
 */

/**
 * @swagger
 * /api/message/{id}/delete:
 *   delete:
 *     summary: Delete a message by ID
 *     tags: [Message]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the message
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Message not found
 */
