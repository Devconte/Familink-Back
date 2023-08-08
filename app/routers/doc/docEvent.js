/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
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
 *                   description: The id of the event
 *                 name:
 *                   type: string
 *                   description: The name of the event
 *                 date:
 *                   type: string
 *                   format: date-time
 *                   description: The date of the event
 *                 starting_time:
 *                   type: string
 *                   format: time
 *                   description: The starting time of the event
 *                   example: 10:00:00
 *                 ending_time:
 *                   type: string
 *                   format: time
 *                   description: The ending time of the Event
 *                   example: 12:00:00
 *                 user_id:
 *                   type: integer
 *                   description: The id of the user who created the event
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                   description: The timestamp when the event was created
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *                   description: The timestamp when the event was last updated
 *       tags:
 *         - name: Event
 *           description: Event created by a user in a family
 */

/**
 * @swagger
 * /api/event/add:
 *   post:
 *     tags:
 *       - Event
 *     summary: Create a new event
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the event
 *               date:
 *                 type: string
 *                 format: date
 *                 description: The date of the event
 *               starting_time:
 *                 type: string
 *                 format: time
 *                 description: The starting time of the event
 *                 example: 10:00:00
 *               ending_time:
 *                 type: string
 *                 format: time
 *                 description: The ending time of the event
 *                 example: 12:00:00
 *               user_id:
 *                 type: integer
 *                 description: The ID of the user who created the event
 *             required:
 *               - name
 *               - date
 *               - starting_time
 *               - ending_time
 *               - user_id
 *     responses:
 *       '200':
 *         description: Event created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       '400':
 *         description: Invalid request body
 */

/**
 * @swagger
 * /api/event/{id}:
 *   get:
 *     tags:
 *       - Event
 *     summary: Get an event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the event
 *     responses:
 *       '200':
 *         description: Event found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       '404':
 *         description: Event not found
 */

/**
 * @swagger
 * /api/event/{id}/delete:
 *   delete:
 *     tags:
 *       - Event
 *     summary: Delete an event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the event
 *     responses:
 *       '204':
 *         description: Event deleted successfully
 *       '404':
 *         description: Event not found
 */

/**
 * @swagger
 * /api/event/{id}/update:
 *   patch:
 *     tags:
 *       - Event
 *     summary: Update an event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the event
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the event
 *               date:
 *                 type: string
 *                 format: date
 *                 description: The date of the event
 *               starting_time:
 *                 type: string
 *                 format: time
 *                 description: The starting time of the event
 *                 example: 10:00:00
 *               ending_time:
 *                 type: string
 *                 format: time
 *                 description: The ending time of the event
 *                 example: 12:00:00
 *               user_id:
 *                 type: integer
 *                 description: The ID of the user who created the event
 *             required:
 *               - name
 *               - date
 *               - starting_time
 *               - ending_time
 *               - user_id
 *     responses:
 *       '204':
 *         description: Event updated successfully
 *       '404':
 *         description: Event not found
 */

/**
 * @swagger
 * /api/event/family/{id}:
 *   get:
 *     tags:
 *       - Event
 *     summary: Get all events of a family
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the family
 *     responses:
 *       '200':
 *         description: Events found
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
 *       '404':
 *         description: Family not found or no events found for the family
 */
