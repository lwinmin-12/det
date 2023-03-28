import { Request, Response, NextFunction } from "express";
import { client } from "../app";
import { getCluster } from "../service/cluster.service";
import {
  addDevice,
  deleteDevice,
  deviceAddCluster,
  deviceRemoveCluster,
  deviceRemoveUser,
  getDevice,
  updateDevice,
} from "../service/device.service";
import { getUser, userRemoveDevice } from "../service/user.service";
import { addUserLog } from "../service/userLog.service";
import fMsg from "../utils/helper";

export const addDeviceHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await addDevice(req.body);
    fMsg(res, "Device added", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const getDeviceHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await getDevice(req.query);
    fMsg(res, "Device are here", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const updateDeviceHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let foundDevice = await getDevice(req.query);
    if (!foundDevice[0]) {
      return next(new Error("Device not found"));
    }

    let result = await updateDevice(req.query, req.body);
    fMsg(res, "device are updated", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const deleteDeviceHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let foundDevice = await getDevice(req.query);
    if (!foundDevice[0]) {
      return next(new Error("Device not found"));
    }
    let result = await deleteDevice(req.query);
    fMsg(res, "Device are deleted", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const deviceAddClusterHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let device = await getDevice({ _id: req.body.deviceId });
  let cluster = await getCluster({ _id: req.body.clusterId });

  if (!device[0] || !cluster[0]) {
    return next(new Error("there is no role or user"));
  }
  let foundRole = device[0].clusters.find(
    (ea?) => ea._id == req.body.clusterId
  );
  // console.log(device[0].clusters)
  if (foundRole) {
    return next(new Error("Role already in exist"));
  }
  try {
    let result = await deviceAddCluster(device[0]._id, cluster[0]._id);
    fMsg(res, "cluster added", result);
  } catch (e: any) {
    next(new Error(e.errors));
  }
};

export const deviceRemoveClusterHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let device = await getDevice({ _id: req.body.deviceId });

  if (!device[0]) {
    return next(new Error("there is no user"));
  }

  let foundRole = device[0].clusters.find(
    (ea?) => ea._id == req.body.clusterId
  );
  if (!foundRole) {
    return next(new Error("role not exist"));
  }
  try {
    let result = await deviceRemoveCluster(device[0]._id, req.body.clusterId);
    fMsg(res, "role removed", result);
  } catch (e: any) {
    next(new Error(e.errors));
  }
};

export const changeDeviceModeHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let foundDevice = await getDevice(req.query);
  if (!foundDevice[0]) {
    return next(new Error("Device not found"));
  }

  let serialNo = foundDevice[0].serialNo;

  client.publish(`spdm/${serialNo}/mobile/mode`, req.body.mode);
  await addUserLog(
    foundDevice[0]._id.toString(),
    req.body.user[0]._id,
    `spdm/${serialNo}/mobile/mode/${req.body.mode}`
  );
  fMsg(res, `device mode changed `);
};

export const deviceRemoveUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let user = await getUser({ _id: req.body.user[0]._id });
    let device = await getDevice({ _id: req.body.deviceId });
    if (!device[0].deviceOwner[0] == req.body.user[0]._id) {
      return next(new Error("You have not this permission"));
    }
    let result = await deviceRemoveUser(device[0]._id, req.body.removeUser);
    fMsg(res, `device remove user changed `, result);
  } catch (e) {
    next(new Error(e.errors));
  }
};
