class RequestCRUD {
  constructor(persistence) {
    this.persistence = persistence;
  }

  async sendRequest(method, url, data = null) {
    try {
      console.log(data);
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: data ? JSON.stringify(data) : null,
      });
      if (!response.ok) {
        // throw new Error("Error en la solicitud.");
        const errorData = await response.json();
        throw errorData;
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    const url = `/cruds?persistence=${this.persistence}`;
    return this.sendRequest("GET", url);
  }

  async getOneById(id) {
    const url = `/cruds/${id}?persistence=${this.persistence}`;
    return this.sendRequest("GET", url);
  }

  async create(item) {
    const url = `/cruds?persistence=${this.persistence}`;
    return this.sendRequest("POST", url, item);
  }

  async modify(id, item) {
    const url = `/cruds/${id}?persistence=${this.persistence}`;
    return this.sendRequest("PATCH", url, item);
  }

  async delete(id) {
    const url = `/cruds/${id}?persistence=${this.persistence}`;
    return this.sendRequest("DELETE", url);
  }

  async restart() {
    const url = `/cruds/restart?persistence=${this.persistence}`;
    return this.sendRequest("GET", url);
  }
}

export { RequestCRUD };
