import React, { useState, useEffect } from "react";

import TodoMarkup from "./todoMarkup";

function Todo(props) {
  return <TodoMarkup {...props} />;
}
export default Todo;
