type loginPayload = {
  username: string;
  password: string;
};

type registerPayload = {
  username: string;
  password: string;
  fullname: string;
  email: string;
};

type addNewTaskPayload = {
  newTask: string;
};

type accessToken = {
  accessToken: string;
};

type loginErrorMessage = {
  code: number;
  message: string;
};

type updatedTask = {
  updatedTask: string;
};

type authHeader = {
  headers: {
    authorization: string;
  };
};

type task = {
  id: number;
  content: string;
  userID: number;
};

export type {
  loginPayload,
  registerPayload,
  addNewTaskPayload,
  accessToken,
  loginErrorMessage,
  updatedTask,
  authHeader,
  task,
};
