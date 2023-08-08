/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
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
 *                   description: The id of the task
 *                 title:
 *                   type: string
 *                   description: The title of the task, what is the task about
 *                 content:
 *                   type: string
 *                   description: The text content of the task, additional information
 *                 state:
 *                   type: boolean
 *                   description: The state of the task
 *                 user_id:
 *                   type: integer
 *                   description: The id of the user who posted the task
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                   description: The timestamp when the task was created
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *                   description: The timestamp when the task was last updated
 *       tags:
 *         - name: Task
 *           description: task uploaded by an user
 */

/**
 * @swagger
 * /api/task/{id}:
 *   get:
 *     summary: Get a task by id
 *     tags: [task]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the task
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *             example:
 *               status: "success"
 *               data:
 *                 result:
 *                   id: 1
 *                   content: "task 1"
 *                   user_id: 1
 *                   created_at: "2023-06-23T12:47:02.021Z"
 *                   updated_at: null
 */

/**
 * @swagger
 * /api/task/add:
 *   post:
 *     summary: Create a new task
 *     tags: [task]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the task
 *               content:
 *                 type: string
 *                 description: The content of the task
 *               state:
 *                 type: boolean
 *                 description: The state of the task
 *               user_id:
 *                 type: integer
 *                 description: The id of the user posting the task
 *               list_id:
 *                 type: integer
 *                 description: The id of the list where the task is posted
 *             example:
 *               title: "task 4"
 *               content: 
 *               state: 
 *               user_id: 1
 *               list_id: 1
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/task'
 *             example:
 *               status: "success"
 *               data:
 *                 result:
 *                   id: 1
 *                   content: "task 1"
 *                   user_id: 1
 *                   created_at: "2023-06-23T12:47:02.021Z"
 *                   updated_at: null
 *       400:
 *         description: Bad requestBody
 */

/**
 * @swagger
 * /api/task/{id}/update:
 *   patch:
 *     summary: Update a task by ID
 *     tags: [task]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the task
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the task
 *               content:
 *                 type: string
 *                 description: The content of the task
 *               state:
 *                 type: boolean
 *                 description: The state of the task
 *               user_id:
 *                 type: integer
 *                 description: The id of the user posting the task
 *               list_id:
 *                 type: integer
 *                 description: The id of the list where the task is posted
 *             example:
 *               title: "buy milk"
 *               content: "whole milk for the kids"
 *               state: true
 *               user_id: 1
 *               list_id: 1
 *     responses:
 *       204:
 *         description: No content
 *       400:
 *         description: Bad requestBody
 *       404:
 *         description: Task not found
 */

/**
 * @swagger
 * /api/task/{id}/delete:
 *   delete:
 *     summary: Delete a task by ID
 *     tags: [task]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the task
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: task not found
 */
