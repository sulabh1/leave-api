class CRUDServices {
  constructor(model) {
    this.model = model;
  }
  async create({ ...body }) {
    return await this.model.create({ ...body });
  }
  async get() {
    return await this.model.findAll();
  }
  async getById(id) {
    return await this.model.findOne({ where: { id } });
  }
  async save() {
    return await this.model.save();
  }
  async destroy() {
    return await this.model.destroy();
  }
  //reload the instance
  async reload() {
    return await this.model.reload();
  }
}
module.exports = CRUDServices;
