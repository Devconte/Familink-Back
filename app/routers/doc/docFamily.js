/**
 * @swagger
 * components:
 *   schemas:
 *     Family:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The ID of the family
 *         name:
 *           type: string
 *           description: The name of the family
 *         family_members:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/FamilyMember'
 *         list_with_tasks:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/ListWithTasks'
 *         messages:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Message'
 *         pictures:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Picture'
 *         events:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Event'
 *
 *     FamilyMember:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The ID of the family member
 *         role:
 *           type: string
 *           description: The role of the family member
 *         pseudo:
 *           type: string
 *           description: The pseudonym of the family member
 *         last_name:
 *           type: string
 *           description: The last name of the family member
 *         first_name:
 *           type: string
 *           description: The first name of the family member
 *
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
 *     Tasks:
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
 *     Messages of a family:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The ID of the message
 *         content:
 *           type: string
 *           description: The content of the message
 *         user_id:
 *           type: integer
 *           description: The ID of the user who sent the message
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: The timestamp of when the message was created
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: The timestamp of when the message was last updated
 *
 *     Pictures of a family:
 *       type: object
 *       properties:
 *         picture_id:
 *           type: integer
 *           description: The ID of the picture
 *         picture_title:
 *           type: string
 *           description: The title of the picture
 *         picture_url:
 *           type: string
 *           format: uri
 *           description: The URL of the picture
 *         comments:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Comment'
 *
 *     Comments on pictures of a family:
 *       type: object
 *       properties:
 *         comment_id:
 *           type: integer
 *           description: The ID of the comment
 *         comment_content:
 *           type: string
 *           description: The content of the comment
 *
 *     Events of a family:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The ID of the event
 *         name:
 *           type: string
 *           description: The name of the event
 *         date:
 *           type: string
 *           format: date
 *           description: The date of the event
 *         starting_time:
 *           type: string
 *           format: time
 *           description: The starting time of the event
 *         ending_time:
 *           type: string
 *           format: time
 *           description: The ending time of the event
 *         user_id:
 *           type: integer
 *           description: The ID of the user who created the event
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: The timestamp of when the event was created
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: The timestamp of when the event was last updated
 */

/**
 * @swagger
 * /api/family/{id}:
 *   get:
 *     tags:
 *       - Family
 *     summary: Get all data from a family using the family ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the family
 *     responses:
 *       '200':
 *         description: Family found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     results:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Family'
 *       '404':
 *         description: Family not found
 */

/**
 * @swagger
 * /api/family/add:
 *   post:
 *     tags:
 *       - Family
 *     summary: Create a new family
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             required:
 *               - name
 *     responses:
 *       '200':
 *         description: Family created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 */

/**
 * @swagger
 * /api/family/{id}/delete:
 *   delete:
 *     tags:
 *       - Family
 *     summary: Delete a family by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the family
 *     responses:
 *       '200':
 *         description: Family deleted successfully
 *       '404':
 *         description: Not found
 *
 *
 *
 */
/**
 * @swagger
 * /api/family/{id}/update:
 *   patch:
 *     tags:
 *       - Family
 *     summary: Update a family by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the family
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             required:
 *               - name
 *     responses:
 *       '204':
 *         description: No content
 */
