/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The unique identifier for the user
 *         username:
 *           type: string
 *           description: The username of the user
 *         email:
 *           type: string
 *           format: email
 *           description: The email address of the user
 *         password:
 *           type: string
 *           format: password
 *           description: The password of the user
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the user was created
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the user was last updated
 *       tags:
 *         - name: User
 *           description: User account information
 */

/**
 * @swagger
 * /api/user/signup:
 *   post:
 *     summary: Create a new user account
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the user
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the user
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The password of the user
 *               passwordConfirmation:
 *                 type: string
 *                 format: password
 *                 description: The password confirmation of the user
 *               first_name:
 *                 type: string
 *                 description: The first name of the user
 *               last_name:
 *                 type: string
 *                 description: The last name of the user
 *               pseudo:
 *                 type: string
 *                 description: The pseudo of the user
 *               role_id:
 *                 type: integer
 *                 description: The role id of the user
 *               family_id:
 *                 type: integer
 *                 description: The family id of the user
 *             example:
 *               username: "john_doe"
 *               email: "john.doe@example.com"
 *               password: "password123"
 *               passwordConfirmation: "password123"
 *               first_name: "John"
 *               last_name: "Doe"
 *               pseudo: "johndoe123"
 *               role_id: 2
 *               family_id: 5
 *     responses:
 *       201:
 *         description: User account created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Status of the response
 *             example:
 *               status: "success"
 *       400:
 *         description: Bad request. Invalid user data provided.
 *
 */

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Login and obtain an access token
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the user
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The password of the user
 *             example:
 *               email: "john.doe@example.com"
 *               password: "password123"
 *     responses:
 *       200:
 *         description: Login successful, returns an access token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 access_token:
 *                   type: string
 *                   description: The access token for the authenticated user
 *     401:
 *       description: Unauthorized. Invalid credentials.
 *
 */

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Get user details by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               id: 1
 *               username: "john_doe"
 *               email: "john.doe@example.com"
 *               created_at: "2023-06-23T12:47:02.021Z"
 *               updated_at: null
 *       404:
 *         description: User not found
 *
 */

/**
 * @swagger
 * /api/user/{id}/update:
 *   patch:
 *     summary: Update user details by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The updated username of the user
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The updated email address of the user
 *             example:
 *               username: "updated_john_doe"
 *               email: "updated_john.doe@example.com"
 *     responses:
 *       204:
 *         description: No content
 *       400:
 *         description: Bad request. Invalid data provided.
 *       404:
 *         description: User not found
 *
 */

/**
 * @swagger
 * /api/user/{id}/delete:
 *   delete:
 *     summary: Delete user by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: User not found
 *
 */
