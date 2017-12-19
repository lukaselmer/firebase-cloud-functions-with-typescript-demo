export class Products {
  static getById(id) {
    return `Product with ID ${id}`;
  }

  static create(body) {
    return `Creating product with body ${body}`;
  }

  static update(id, body) {
    return `Updating product with ID ${id} to ${body}`;
  }

  static delete(id) {
    return `Deleting product with ID ${id}`;
  }

  static list() {
    return `Listing all products`;
  }
}
