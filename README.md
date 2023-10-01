# Facility Management API

- Author: [Mahadi Abuhuraira](https://github.com/mamt4real)
- Date: 30th Sep, 2023

## Entity relationship Diagram

## ![E-R Diagram](./erd.png)

# Facility-Management API Documentation

Welcome to the Facility Management documentation. This API allows Departments to manage their facilities.

## Base URL

- Local: `http://localhost:5001/api/v1`
- Live: `Coming soon!`

## Authentication

- Authentication is required for all endpoints except auth endpoints.
- Include a token in the `Authorization` header for each request using the Bearer format.

---

## Authentication Endpoints

### 1. Signup

- **URL**: `/auth/signup`
- **Method**: `POST`
- **Description**: Registers a new User.
- **Request Body**

```json
{
  "email": "mamt4real2@gmail.com",
  "password": "12345pass",
  "name": "Proxy User",
  "about": "An Intruder"
}
```

- **Response**:

- Status: 201 OK

```json
{
  "status": "success",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6mlhdCI6MTY5MDE0MjI3NDg5MCwiZXhwIjoxNjkwMTQyMzYxMjkwfQ.KiWccF3zwW0cZ0eS3rAn9oaD0pLgToV1H0RoEtR-PRs",
  "user": {
    "email": "user2@gmail.com",
    "name": "Proxy User",
    "about": "An Intruder",
    "role": "user",
    "username": "user2",
    "createdAt": "2023-07-23T19:57:54.733Z",
    "updatedAt": "2023-07-23T19:57:54.733Z",
    "id": "64bd86421970d690759169bc"
  }
}
```

### 2. Login

- **URL**: `/auth/login`
- **Method**: `POST`
- **Description**: Logs in a User.
- **Request Body**

```json
{
  "password": "12345pass",
  "email": "user2@gmail.com"
}
```

- **Response**:

- Status: 200 OK

```json
{
  "status": "success",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmQ4NjQ3NDg5MCwiZXhwIjoxNjkwMTQyMzYxMjkwfQ.KiWccF3zwW0cZ0eS3rAn9oaD0pLgToV1H0RoEtR-PRs",
  "user": {
    "email": "user2@gmail.com",
    "name": "Proxy User",
    "about": "An Intruder",
    "role": "user",
    "username": "user2",
    "createdAt": "2023-07-23T19:57:54.733Z",
    "updatedAt": "2023-07-23T19:57:54.733Z",
    "id": "64bd86421970d690759169bc"
  }
}
```

---

## Buildings Endpoints

### 1. Get All Buildings

- **URL**: `/buildings`
- **Method**: `GET`
- **Description**: Get a list of all Buildings in the collection.
- **Request Parameters**: None
- **Response**:

- Status: 200 OK

```json
[
  {
    "id": "Building1",
    "title": "Sunset at the beach",
    "url": "https://example.com/buildings/sunset.jpg",
    "description": "Beautiful sunset view at the beach",
    "likes": ["user_id_1", "user_id_2"],
    "createdAt": "2023-04-01T12:00:00Z",
    "updatedAt": "2023-04-03T08:30:00Z"
  }
  // Additional Building objects
]
```

### 2. Get a Single Building

- **URL**: `/buildings/:id`
- **Method**: `GET`
- **Description**: Get details of a specific Building.
- **Request Parameters**:
  - `id`: (string) The ID of the Building to retrieve.
- **Response**:

- Status: 200 OK

```json
{
  "id": "Building1",
  "title": "Sunset at the beach",
  "url": "https://example.com/buildings/sunset.jpg",
  "description": "Beautiful sunset view at the beach",
  "likes": 15,
  "createdAt": "2023-04-01T12:00:00Z",
  "updatedAt": "2023-04-03T08:30:00Z"
}
```

### 3. Create a Building

- **URL**: `/buildings`
- **Method**: `POST`
- **Description**: Add a new Building to the Department.
- **Multipart File**: image
- **Request Body**:

```json
{
  "title": "New Building",
  "description": "A brand new Building"
}
```

- **Response**:
- Status: 201 Created

```json
{
  "id": "Building2",
  "title": "New Building",
  "url": "https://example.com/buildings/newBuilding.jpg",
  "description": "A brand new Building",
  "likes": [],
  "createdAt": "2023-04-03T15:45:00Z",
  "updatedAt": "2023-04-03T15:45:00Z"
}
```

### 4. Update a Building

- **URL**: `/buildings/:id`
- **Method**: `PUT`
- **Description**: Update details of an existing Building.
- **Request Parameters**:
  - `id`: (string) The ID of the Building to update.
- **Request Body**:

```json
{
  "title": "Updated Building Title",
  "description": "Updated Building description"
}
```

- **Response**:
- Status: 200 Ok

```json
{
  "id": "Building2",
  "title": "Updated Building Title",
  "url": "https://example.com/buildings/newBuilding.jpg",
  "description": "Updated Building description",
  "likes": 0,
  "createdAt": "2023-04-03T15:45:00Z",
  "updatedAt": "2023-04-03T16:30:00Z"
}
```

### 5. Delete a Building

- **URL**: `/buildings/:id`
- **Method**: `DELETE`
- **Description**: Delete a Building from the collection.
- **Request Parameters**:
  - `id`: (string) The ID of the Building to delete.
- **Response**:
- Status: 204 No Content

---

## Users Endpoints

### 1. Get All Users

- **URL**: `/users`
- **Method**: `GET`
- **Description**: Get a list of all users.
- **Request Parameters**: None
- **Response**:

Status: 200 Ok

```json
[
  {
    "id": "user1",
    "username": "user123",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "createdAt": "2023-04-01T12:00:00Z"
  }
  // Additional user objects
]
```

### 2. Get a Single User

- **URL**: `/users/:id`
- **Method**: `GET`
- **Description**: Get details of a specific user.
- **Request Parameters**:
  - `id`: (string) The ID of the user to retrieve.
- **Response**:

Status: 200 OK

```json
{
  "id": "user1",
  "username": "user123",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "createdAt": "2023-04-01T12:00:00Z"
}
```

### 3. Create a User

- **URL**: `/users`
- **Method**: `POST`
- **Description**: Add a new user to the system.
- **Request Body**:

```json
{
  "username": "newuser",
  "name": "New User",
  "email": "new.user@example.com",
  "password": "password123"
}
```

- **Response**:
  Status: 201 Created

```json
{
  "id": "user2",
  "username": "newuser",
  "name": "New User",
  "email": "new.user@example.com",
  "createdAt": "2023-04-03T15:45:00Z"
}
```

### 4. Update a User

- **URL**: `/users/:id`
- **Method**: `PUT`
- **Description**: Update details of an existing user.
- **Request Parameters**:
  - `id`: (string) The ID of the user to update.
- **Request Body**:

```json
{
  "name": "Updated User",
  "email": "updated.user@example.com"
}
```

- **Response**:
  Status: 200 Ok

```json
{
  "id": "user2",
  "username": "newuser",
  "name": "Updated User",
  "email": "updated.user@example.com",
  "createdAt": "2023-04-03T15:45:00Z"
}
```

### 5. Delete a User

- **URL**: `/users/:id`
- **Method**: `DELETE`
- **Description**: Delete a user from the system.
- **Request Parameters**:
  - `id`: (string) The ID of the user to delete.
- **Response**:
  Status: 204 No Content

---

## Error Handling

- The API returns appropriate error codes and messages for invalid requests.

## Rate Limiting

- The API enforces rate limiting to prevent abuse.

## Support and Contact

For support or inquiries, please contact mamt4real@gmail.com.

## License

This API is provided under the [MIT License](https://opensource.org/licenses/MIT).
