import React, { useState, useEffect } from "react";

import TodoMarkup from "./todo_markup";

function Todo(props) {
  return <TodoMarkup {...props} />;
}
export default Todo;
