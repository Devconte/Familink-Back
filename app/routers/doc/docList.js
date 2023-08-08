/**
 * @swagger
 * components:
 *   schemas:
 *     ListWithTasks:
 *       type: object
 *       properties:
 *         list_id:
 *           type: integer
 *           description: The ID of the list
 *         list_title:
 *           type: string
 *           description: The title of the list
 *         category_id:
 *           type: integer
 *           description: The ID of the category
 *         list_user_id:
 *           type: integer
 *           description: The ID of the user who created the list
 *         task:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Task'
 *
 *     Task:
 *       type: object
 *       properties:
 *         task_id:
 *           type: integer
 *           description: The ID of the task
 *         task_title:
 *           type: string
 *           description: The title of the task
 *         task_content:
 *           type: string
 *           description: The content of the task
 *         task_state:
 *           type: boolean
 *           description: The state of the task
 *         task_user_id:
 *           type: integer
 *           description: The ID of the user who created the task
 *
 *     SingleListResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           description: Status of the response
 *         data:
 *           type: object
 *           properties:
 *             result:
 *               $ref: '#/components/schemas/List'
 *
 *     List:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the list
 *         user_id:
 *           type: integer
 *           description: The ID of the user who created the list
 *         category_id:
 *           type: integer
 *           description: The ID of the category
 *
 */

/**
 * @swagger
 * /api/list/add:
 *   post:
 *     summary: Create a new list
 *     tags: [Lists]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/List'
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/List'
 */

/**
 * @swagger
 * /api/list/{id}:
 *   get:
 *     summary: Get a list by ID
 *     tags: [Lists]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the list
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/List'
 */

/**
 * @swagger
 * /api/list/{id}/delete:
 *   delete:
 *     summary: Delete a list by ID
 *     tags: [Lists]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the list
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: No content
 */

/**
 * @swagger
 * /api/list/{id}/update:
 *   patch:
 *     summary: Update a list by ID
 *     tags: [Lists]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the list
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/List'
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/List'
 */
