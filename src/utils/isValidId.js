import { isValidObjectId } from 'mongoose';

const validId = (pid) => {
  return isValidObjectId(pid);
};

const validIdFs = (pid) => {
  const check = /^[a-f\d]{8}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{12}$/i;
  return check.test(pid);
};

export { validId, validIdFs };
