/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @summary A compute node in the Batch service.
  *
 */
class ComputeNode {
  /**
   * Create a ComputeNode.
   * @property {string} [id] The ID of the compute node. Every node that is
   * added to a pool is assigned a unique ID. Whenever a node is removed from a
   * pool, all of its local files are deleted, and the ID is reclaimed and
   * could be reused for new nodes.
   * @property {string} [url] The URL of the compute node.
   * @property {string} [state] The current state of the compute node. The
   * low-priority node has been preempted. Tasks which were running on the node
   * when it was pre-empted will be rescheduled when another node becomes
   * available. Possible values include: 'idle', 'rebooting', 'reimaging',
   * 'running', 'unusable', 'creating', 'starting', 'waitingForStartTask',
   * 'startTaskFailed', 'unknown', 'leavingPool', 'offline', 'preempted'
   * @property {string} [schedulingState] Whether the compute node is available
   * for task scheduling. Possible values include: 'enabled', 'disabled'
   * @property {date} [stateTransitionTime] The time at which the compute node
   * entered its current state.
   * @property {date} [lastBootTime] The last time at which the compute node
   * was started. This property may not be present if the node state is
   * unusable.
   * @property {date} [allocationTime] The time at which this compute node was
   * allocated to the pool. This is the time when the node was initially
   * allocated and doesn't change once set. It is not updated when the node is
   * service healed or preempted.
   * @property {string} [ipAddress] The IP address that other compute nodes can
   * use to communicate with this compute node. Every node that is added to a
   * pool is assigned a unique IP address. Whenever a node is removed from a
   * pool, all of its local files are deleted, and the IP address is reclaimed
   * and could be reused for new nodes.
   * @property {string} [affinityId] An identifier which can be passed when
   * adding a task to request that the task be scheduled on this node. Note
   * that this is just a soft affinity. If the target node is busy or
   * unavailable at the time the task is scheduled, then the task will be
   * scheduled elsewhere.
   * @property {string} [vmSize] The size of the virtual machine hosting the
   * compute node. For information about available sizes of virtual machines in
   * pools, see Choose a VM size for compute nodes in an Azure Batch pool
   * (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes).
   * @property {number} [totalTasksRun] The total number of job tasks completed
   * on the compute node. This includes Job Manager tasks and normal tasks, but
   * not Job Preparation, Job Release or Start tasks.
   * @property {number} [runningTasksCount] The total number of currently
   * running job tasks on the compute node. This includes Job Manager tasks and
   * normal tasks, but not Job Preparation, Job Release or Start tasks.
   * @property {number} [totalTasksSucceeded] The total number of job tasks
   * which completed successfully (with exitCode 0) on the compute node. This
   * includes Job Manager tasks and normal tasks, but not Job Preparation, Job
   * Release or Start tasks.
   * @property {array} [recentTasks] A list of tasks whose state has recently
   * changed. This property is present only if at least one task has run on
   * this node since it was assigned to the pool.
   * @property {object} [startTask] The task specified to run on the compute
   * node as it joins the pool.
   * @property {string} [startTask.commandLine] The command line does not run
   * under a shell, and therefore cannot take advantage of shell features such
   * as environment variable expansion. If you want to take advantage of such
   * features, you should invoke the shell in the command line, for example
   * using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If
   * the command line refers to file paths, it should use a relative path
   * (relative to the task working directory), or use the Batch provided
   * environment variable
   * (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
   * @property {object} [startTask.containerSettings] When this is specified,
   * all directories recursively below the AZ_BATCH_NODE_ROOT_DIR (the root of
   * Azure Batch directories on the node) are mapped into the container, all
   * task environment variables are mapped into the container, and the task
   * command line is executed in the container.
   * @property {string} [startTask.containerSettings.containerRunOptions] These
   * additional options are supplied as arguments to the "docker create"
   * command, in addition to those controlled by the Batch Service.
   * @property {string} [startTask.containerSettings.imageName] This is the
   * full image reference, as would be specified to "docker pull". If no tag is
   * provided as part of the image name, the tag ":latest" is used as a
   * default.
   * @property {object} [startTask.containerSettings.registry] This setting can
   * be omitted if was already provided at pool creation.
   * @property {string} [startTask.containerSettings.registry.registryServer]
   * If omitted, the default is "docker.io".
   * @property {string} [startTask.containerSettings.registry.userName]
   * @property {string} [startTask.containerSettings.registry.password]
   * @property {array} [startTask.resourceFiles] Files listed under this
   * element are located in the task's working directory.
   * @property {array} [startTask.environmentSettings]
   * @property {object} [startTask.userIdentity] If omitted, the task runs as a
   * non-administrative user unique to the task.
   * @property {string} [startTask.userIdentity.userName] The userName and
   * autoUser properties are mutually exclusive; you must specify one but not
   * both.
   * @property {object} [startTask.userIdentity.autoUser] The userName and
   * autoUser properties are mutually exclusive; you must specify one but not
   * both.
   * @property {string} [startTask.userIdentity.autoUser.scope] The default
   * value is task. Possible values include: 'task', 'pool'
   * @property {string} [startTask.userIdentity.autoUser.elevationLevel] The
   * default value is nonAdmin. Possible values include: 'nonAdmin', 'admin'
   * @property {number} [startTask.maxTaskRetryCount] The Batch service retries
   * a task if its exit code is nonzero. Note that this value specifically
   * controls the number of retries. The Batch service will try the task once,
   * and may then retry up to this limit. For example, if the maximum retry
   * count is 3, Batch tries the task up to 4 times (one initial try and 3
   * retries). If the maximum retry count is 0, the Batch service does not
   * retry the task. If the maximum retry count is -1, the Batch service
   * retries the task without limit.
   * @property {boolean} [startTask.waitForSuccess] If true and the start task
   * fails on a compute node, the Batch service retries the start task up to
   * its maximum retry count (maxTaskRetryCount). If the task has still not
   * completed successfully after all retries, then the Batch service marks the
   * compute node unusable, and will not schedule tasks to it. This condition
   * can be detected via the node state and failure info details. If false, the
   * Batch service will not wait for the start task to complete. In this case,
   * other tasks can start executing on the compute node while the start task
   * is still running; and even if the start task fails, new tasks will
   * continue to be scheduled on the node. The default is false.
   * @property {object} [startTaskInfo] Runtime information about the execution
   * of the start task on the compute node.
   * @property {string} [startTaskInfo.state] Possible values include:
   * 'running', 'completed'
   * @property {date} [startTaskInfo.startTime] This value is reset every time
   * the task is restarted or retried (that is, this is the most recent time at
   * which the start task started running).
   * @property {date} [startTaskInfo.endTime] This is the end time of the most
   * recent run of the start task, if that run has completed (even if that run
   * failed and a retry is pending). This element is not present if the start
   * task is currently running.
   * @property {number} [startTaskInfo.exitCode] This property is set only if
   * the start task is in the completed state. In general, the exit code for a
   * process reflects the specific convention implemented by the application
   * developer for that process. If you use the exit code value to make
   * decisions in your code, be sure that you know the exit code convention
   * used by the application process. However, if the Batch service terminates
   * the start task (due to timeout, or user termination via the API) you may
   * see an operating system-defined exit code.
   * @property {object} [startTaskInfo.containerInfo] This property is set only
   * if the task runs in a container context.
   * @property {string} [startTaskInfo.containerInfo.containerId]
   * @property {string} [startTaskInfo.containerInfo.state] This is the state
   * of the container according to the Docker service. It is equivalent to the
   * status field returned by "docker inspect".
   * @property {string} [startTaskInfo.containerInfo.error] This is the
   * detailed error string from the Docker service, if available. It is
   * equivalent to the error field returned by "docker inspect".
   * @property {object} [startTaskInfo.failureInfo] This property is set only
   * if the task is in the completed state and encountered a failure.
   * @property {string} [startTaskInfo.failureInfo.category] Possible values
   * include: 'userError', 'serverError'
   * @property {string} [startTaskInfo.failureInfo.code]
   * @property {string} [startTaskInfo.failureInfo.message]
   * @property {array} [startTaskInfo.failureInfo.details]
   * @property {number} [startTaskInfo.retryCount] Task application failures
   * (non-zero exit code) are retried, pre-processing errors (the task could
   * not be run) and file upload errors are not retried. The Batch service will
   * retry the task up to the limit specified by the constraints.
   * @property {date} [startTaskInfo.lastRetryTime] This element is present
   * only if the task was retried (i.e. retryCount is nonzero). If present,
   * this is typically the same as startTime, but may be different if the task
   * has been restarted for reasons other than retry; for example, if the
   * compute node was rebooted during a retry, then the startTime is updated
   * but the lastRetryTime is not.
   * @property {string} [startTaskInfo.result] If the value is 'failed', then
   * the details of the failure can be found in the failureInfo property.
   * Possible values include: 'success', 'failure'
   * @property {array} [certificateReferences] The list of certificates
   * installed on the compute node. For Windows compute nodes, the Batch
   * service installs the certificates to the specified certificate store and
   * location. For Linux compute nodes, the certificates are stored in a
   * directory inside the task working directory and an environment variable
   * AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this
   * location. For certificates with visibility of 'remoteUser', a 'certs'
   * directory is created in the user's home directory (e.g.,
   * /home/{user-name}/certs) and certificates are placed in that directory.
   * @property {array} [errors] The list of errors that are currently being
   * encountered by the compute node.
   * @property {boolean} [isDedicated] Whether this compute node is a dedicated
   * node. If false, the node is a low-priority node.
   * @property {object} [endpointConfiguration] The endpoint configuration for
   * the compute node.
   * @property {array} [endpointConfiguration.inboundEndpoints]
   * @property {object} [nodeAgentInfo] Information about the node agent
   * version and the time the node upgraded to a new version.
   * @property {string} [nodeAgentInfo.version] This version number can be
   * checked against the node agent release notes located at
   * https://github.com/Azure/Batch/blob/master/changelogs/nodeagent/CHANGELOG.md.
   * @property {date} [nodeAgentInfo.lastUpdateTime] This is the most recent
   * time that the node agent was updated to a new version.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ComputeNode
   *
   * @returns {object} metadata of ComputeNode
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ComputeNode',
      type: {
        name: 'Composite',
        className: 'ComputeNode',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          url: {
            required: false,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          },
          state: {
            required: false,
            serializedName: 'state',
            type: {
              name: 'Enum',
              allowedValues: [ 'idle', 'rebooting', 'reimaging', 'running', 'unusable', 'creating', 'starting', 'waitingForStartTask', 'startTaskFailed', 'unknown', 'leavingPool', 'offline', 'preempted' ]
            }
          },
          schedulingState: {
            required: false,
            serializedName: 'schedulingState',
            type: {
              name: 'Enum',
              allowedValues: [ 'enabled', 'disabled' ]
            }
          },
          stateTransitionTime: {
            required: false,
            serializedName: 'stateTransitionTime',
            type: {
              name: 'DateTime'
            }
          },
          lastBootTime: {
            required: false,
            serializedName: 'lastBootTime',
            type: {
              name: 'DateTime'
            }
          },
          allocationTime: {
            required: false,
            serializedName: 'allocationTime',
            type: {
              name: 'DateTime'
            }
          },
          ipAddress: {
            required: false,
            serializedName: 'ipAddress',
            type: {
              name: 'String'
            }
          },
          affinityId: {
            required: false,
            serializedName: 'affinityId',
            type: {
              name: 'String'
            }
          },
          vmSize: {
            required: false,
            serializedName: 'vmSize',
            type: {
              name: 'String'
            }
          },
          totalTasksRun: {
            required: false,
            serializedName: 'totalTasksRun',
            type: {
              name: 'Number'
            }
          },
          runningTasksCount: {
            required: false,
            serializedName: 'runningTasksCount',
            type: {
              name: 'Number'
            }
          },
          totalTasksSucceeded: {
            required: false,
            serializedName: 'totalTasksSucceeded',
            type: {
              name: 'Number'
            }
          },
          recentTasks: {
            required: false,
            serializedName: 'recentTasks',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TaskInformationElementType',
                  type: {
                    name: 'Composite',
                    className: 'TaskInformation'
                  }
              }
            }
          },
          startTask: {
            required: false,
            serializedName: 'startTask',
            type: {
              name: 'Composite',
              className: 'StartTask'
            }
          },
          startTaskInfo: {
            required: false,
            serializedName: 'startTaskInfo',
            type: {
              name: 'Composite',
              className: 'StartTaskInformation'
            }
          },
          certificateReferences: {
            required: false,
            serializedName: 'certificateReferences',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CertificateReferenceElementType',
                  type: {
                    name: 'Composite',
                    className: 'CertificateReference'
                  }
              }
            }
          },
          errors: {
            required: false,
            serializedName: 'errors',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ComputeNodeErrorElementType',
                  type: {
                    name: 'Composite',
                    className: 'ComputeNodeError'
                  }
              }
            }
          },
          isDedicated: {
            required: false,
            serializedName: 'isDedicated',
            type: {
              name: 'Boolean'
            }
          },
          endpointConfiguration: {
            required: false,
            serializedName: 'endpointConfiguration',
            type: {
              name: 'Composite',
              className: 'ComputeNodeEndpointConfiguration'
            }
          },
          nodeAgentInfo: {
            required: false,
            serializedName: 'nodeAgentInfo',
            type: {
              name: 'Composite',
              className: 'NodeAgentInformation'
            }
          }
        }
      }
    };
  }
}

module.exports = ComputeNode;
