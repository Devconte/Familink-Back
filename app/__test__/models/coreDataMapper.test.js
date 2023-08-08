/* eslint-disable no-undef */
const CoreDataMapper = require('../../models/CoreDataMapper');
const client = require('../../models/helpers/database');

jest.mock('../../models/helpers/database');

describe('Init CoreDataMapper', () => {
  let coreDataMapper;
  let mockQuery;

  beforeEach(() => {
    CoreDataMapper.tableName = 'testTable';
    CoreDataMapper.functionName = 'testFunction';
    coreDataMapper = new CoreDataMapper();
    mockQuery = jest.fn();
    client.query = mockQuery;
  });

  describe('findAll', () => {
    it('should find all', async () => {
      const fakeFamilyId = 1;
      const fakeResults = { rows: ['row1', 'row2'] };
      mockQuery.mockResolvedValue(fakeResults);
      const result = await coreDataMapper.findAll(fakeFamilyId);

      expect(mockQuery).toHaveBeenCalledWith({
        text: `SELECT * FROM ${CoreDataMapper.functionName}($1)`,
        values: [fakeFamilyId],
      });
      expect(result).toEqual(fakeResults.rows);
    });
  });

  describe('findByPk', () => {
    it('should return a row from the database', async () => {
      const id = 1;
      const fakeRow = { id: 1, name: 'John' };
      client.query.mockResolvedValue({ rows: [fakeRow] });
      coreDataMapper = new CoreDataMapper();
      const result = await coreDataMapper.findByPk(id);

      expect(result).toEqual(fakeRow);
      expect(client.query).toHaveBeenCalledTimes(1);
      expect(client.query).toHaveBeenCalledWith({
        text: 'SELECT * FROM "testTable" WHERE id = ($1)',
        values: [id],
      });
    });

    it('should return undefined if no row is found', async () => {
      const id = 123;
      mockQuery.mockResolvedValue({ rows: [] });
      const result = await coreDataMapper.findByPk(id);
      expect(result).toBeUndefined();
      expect(mockQuery).toHaveBeenCalledWith({
        text: `SELECT * FROM "${CoreDataMapper.tableName}" WHERE id = ($1)`,
        values: [id],
      });
    });
  });

  describe('create', () => {
    it('should create a new row in the database', async () => {
      const fakeRow = {
        email: 'user.test@gmail.com',
        password: 'password',
        passwordConfirmation: 'password',
        first_name: 'Tester',
        last_name: 'Testerfold',
        pseudo: 'LilTester',
        role_id: null,
        family_id: null,
      };
      const fakeResult = { id: 3, ...fakeRow };
      mockQuery.mockResolvedValue({ rows: [fakeResult] });
      const result = await coreDataMapper.create(fakeRow);

      expect(result).toEqual(fakeResult);
      expect(mockQuery).toHaveBeenCalledWith({
        text: `SELECT * FROM create_${CoreDataMapper.tableName}($1)`,
        values: [fakeRow],
      });
    });
  });

  describe('update', () => {
    it('should update a row in the database', async () => {
      const id = 1;
      const fakeRow = { first_name: 'Updated Name' };
      const fakeResult = { id, ...fakeRow };
      mockQuery.mockResolvedValue({ rows: [fakeResult] });
      const result = await coreDataMapper.update(id, fakeRow);
      expect(result).toEqual(fakeResult);
      const expectedQueryText = `SELECT * FROM update_${CoreDataMapper.tableName}($1)`;
      expect(mockQuery).toHaveBeenCalledWith({
        text: expectedQueryText,
        values: [{ ...fakeRow, id }], // Ensure both id and modObject are passed in the values array
      });
    });
  });

  describe('delete', () => {
    it('should delete a row from the database', async () => {
      const id = 1;
      mockQuery.mockResolvedValue();

      await coreDataMapper.delete(id);

      expect(mockQuery).toHaveBeenCalledTimes(1);
      expect(mockQuery).toHaveBeenCalledWith({
        text: `DELETE FROM "${CoreDataMapper.tableName}" WHERE id = ($1)`,
        values: [id],
      });
    });
  });
});
