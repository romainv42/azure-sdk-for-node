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
 * @summary Specifies characteristics for a temporary 'auto pool'. The Batch
 * service will create this auto pool when the job is submitted.
  *
 */
class AutoPoolSpecification {
  /**
   * Create a AutoPoolSpecification.
   * @property {string} [autoPoolIdPrefix] A prefix to be added to the unique
   * identifier when a pool is automatically created. The Batch service assigns
   * each auto pool a unique identifier on creation. To distinguish between
   * pools created for different purposes, you can specify this element to add
   * a prefix to the ID that is assigned. The prefix can be up to 20 characters
   * long.
   * @property {string} poolLifetimeOption The minimum lifetime of created auto
   * pools, and how multiple jobs on a schedule are assigned to pools. Possible
   * values include: 'jobSchedule', 'job'
   * @property {boolean} [keepAlive] Whether to keep an auto pool alive after
   * its lifetime expires. If false, the Batch service deletes the pool once
   * its lifetime (as determined by the poolLifetimeOption setting) expires;
   * that is, when the job or job schedule completes. If true, the Batch
   * service does not delete the pool automatically. It is up to the user to
   * delete auto pools created with this option.
   * @property {object} [pool] The pool specification for the auto pool.
   * @property {string} [pool.displayName] The display name need not be unique
   * and can contain any Unicode characters up to a maximum length of 1024.
   * @property {string} [pool.vmSize] For information about available sizes of
   * virtual machines in pools, see Choose a VM size for compute nodes in an
   * Azure Batch pool
   * (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes).
   * @property {object} [pool.cloudServiceConfiguration] This property must be
   * specified if the pool needs to be created with Azure PaaS VMs. This
   * property and virtualMachineConfiguration are mutually exclusive and one of
   * the properties must be specified. If neither is specified then the Batch
   * service returns an error; if you are calling the REST API directly, the
   * HTTP status code is 400 (Bad Request). This property cannot be specified
   * if the Batch account was created with its poolAllocationMode property set
   * to 'UserSubscription'.
   * @property {string} [pool.cloudServiceConfiguration.osFamily] Possible
   * values are:
   * 2 - OS Family 2, equivalent to Windows Server 2008 R2 SP1.
   * 3 - OS Family 3, equivalent to Windows Server 2012.
   * 4 - OS Family 4, equivalent to Windows Server 2012 R2.
   * 5 - OS Family 5, equivalent to Windows Server 2016. For more information,
   * see Azure Guest OS Releases
   * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
   * @property {string} [pool.cloudServiceConfiguration.osVersion] The default
   * value is * which specifies the latest operating system version for the
   * specified OS family.
   * @property {object} [pool.virtualMachineConfiguration] This property must
   * be specified if the pool needs to be created with Azure IaaS VMs. This
   * property and cloudServiceConfiguration are mutually exclusive and one of
   * the properties must be specified. If neither is specified then the Batch
   * service returns an error; if you are calling the REST API directly, the
   * HTTP status code is 400 (Bad Request).
   * @property {object} [pool.virtualMachineConfiguration.imageReference]
   * @property {string}
   * [pool.virtualMachineConfiguration.imageReference.publisher] For example,
   * Canonical or MicrosoftWindowsServer.
   * @property {string} [pool.virtualMachineConfiguration.imageReference.offer]
   * For example, UbuntuServer or WindowsServer.
   * @property {string} [pool.virtualMachineConfiguration.imageReference.sku]
   * For example, 14.04.0-LTS or 2012-R2-Datacenter.
   * @property {string}
   * [pool.virtualMachineConfiguration.imageReference.version] A value of
   * 'latest' can be specified to select the latest version of an image. If
   * omitted, the default is 'latest'.
   * @property {string}
   * [pool.virtualMachineConfiguration.imageReference.virtualMachineImageId]
   * This property is mutually exclusive with other ImageReference properties.
   * The virtual machine image must be in the same region and subscription as
   * the Azure Batch account. For more details, see
   * https://docs.microsoft.com/azure/batch/batch-custom-images.
   * @property {string} [pool.virtualMachineConfiguration.nodeAgentSKUId] The
   * Batch node agent is a program that runs on each node in the pool, and
   * provides the command-and-control interface between the node and the Batch
   * service. There are different implementations of the node agent, known as
   * SKUs, for different operating systems. You must specify a node agent SKU
   * which matches the selected image reference. To get the list of supported
   * node agent SKUs along with their list of verified image references, see
   * the 'List supported node agent SKUs' operation.
   * @property {object} [pool.virtualMachineConfiguration.windowsConfiguration]
   * This property must not be specified if the imageReference property
   * specifies a Linux OS image.
   * @property {boolean}
   * [pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
   * If omitted, the default value is true.
   * @property {array} [pool.virtualMachineConfiguration.dataDisks] This
   * property must be specified if the compute nodes in the pool need to have
   * empty data disks attached to them. This cannot be updated. Each node gets
   * its own disk (the disk is not a file share). Existing disks cannot be
   * attached, each attached disk is empty. When the node is removed from the
   * pool, the disk and all data associated with it is also deleted. The disk
   * is not formatted after being attached, it must be formatted before use -
   * for more information see
   * https://docs.microsoft.com/en-us/azure/virtual-machines/linux/classic/attach-disk#initialize-a-new-data-disk-in-linux
   * and
   * https://docs.microsoft.com/en-us/azure/virtual-machines/windows/attach-disk-ps#add-an-empty-data-disk-to-a-virtual-machine.
   * @property {string} [pool.virtualMachineConfiguration.licenseType] This
   * only applies to images that contain the Windows operating system, and
   * should only be used when you hold valid on-premises licenses for the nodes
   * which will be deployed. If omitted, no on-premises licensing discount is
   * applied. Values are:
   *
   * Windows_Server - The on-premises license is for Windows Server.
   * Windows_Client - The on-premises license is for Windows Client.
   * @property {object}
   * [pool.virtualMachineConfiguration.containerConfiguration] If specified,
   * setup is performed on each node in the pool to allow tasks to run in
   * containers. All regular tasks and job manager tasks run on this pool must
   * specify the containerSettings property, and all other tasks may specify
   * it.
   * @property {array}
   * [pool.virtualMachineConfiguration.containerConfiguration.containerImageNames]
   * This is the full image reference, as would be specified to "docker pull".
   * An image will be sourced from the default Docker registry unless the image
   * is fully qualified with an alternative registry.
   * @property {array}
   * [pool.virtualMachineConfiguration.containerConfiguration.containerRegistries]
   * If any images must be downloaded from a private registry which requires
   * credentials, then those credentials must be provided here.
   * @property {number} [pool.maxTasksPerNode] The default value is 1. The
   * maximum value of this setting depends on the size of the compute nodes in
   * the pool (the vmSize setting).
   * @property {object} [pool.taskSchedulingPolicy]
   * @property {string} [pool.taskSchedulingPolicy.nodeFillType] Possible
   * values include: 'spread', 'pack'
   * @property {moment.duration} [pool.resizeTimeout] This timeout applies only
   * to manual scaling; it has no effect when enableAutoScale is set to true.
   * The default value is 15 minutes. The minimum value is 5 minutes. If you
   * specify a value less than 5 minutes, the Batch service rejects the request
   * with an error; if you are calling the REST API directly, the HTTP status
   * code is 400 (Bad Request).
   * @property {number} [pool.targetDedicatedNodes] This property must not be
   * specified if enableAutoScale is set to true. If enableAutoScale is set to
   * false, then you must set either targetDedicatedNodes,
   * targetLowPriorityNodes, or both.
   * @property {number} [pool.targetLowPriorityNodes] This property must not be
   * specified if enableAutoScale is set to true. If enableAutoScale is set to
   * false, then you must set either targetDedicatedNodes,
   * targetLowPriorityNodes, or both.
   * @property {boolean} [pool.enableAutoScale] If false, at least one of
   * targetDedicateNodes and targetLowPriorityNodes must be specified. If true,
   * the autoScaleFormula element is required. The pool automatically resizes
   * according to the formula. The default value is false.
   * @property {string} [pool.autoScaleFormula] This property must not be
   * specified if enableAutoScale is set to false. It is required if
   * enableAutoScale is set to true. The formula is checked for validity before
   * the pool is created. If the formula is not valid, the Batch service
   * rejects the request with detailed error information.
   * @property {moment.duration} [pool.autoScaleEvaluationInterval] The default
   * value is 15 minutes. The minimum and maximum value are 5 minutes and 168
   * hours respectively. If you specify a value less than 5 minutes or greater
   * than 168 hours, the Batch service rejects the request with an invalid
   * property value error; if you are calling the REST API directly, the HTTP
   * status code is 400 (Bad Request).
   * @property {boolean} [pool.enableInterNodeCommunication] Enabling
   * inter-node communication limits the maximum size of the pool due to
   * deployment restrictions on the nodes of the pool. This may result in the
   * pool not reaching its desired size. The default value is false.
   * @property {object} [pool.networkConfiguration]
   * @property {string} [pool.networkConfiguration.subnetId] This is of the
   * form
   * /subscriptions/{subscription}/resourceGroups/{group}/providers/{provider}/virtualNetworks/{network}/subnets/{subnet}.
   * The virtual network must be in the same region and subscription as the
   * Azure Batch account. The specified subnet should have enough free IP
   * addresses to accommodate the number of nodes in the pool. If the subnet
   * doesn't have enough free IP addresses, the pool will partially allocate
   * compute nodes, and a resize error will occur. For pools created with
   * virtualMachineConfiguration only ARM virtual networks
   * ('Microsoft.Network/virtualNetworks') are supported, but for pools created
   * with cloudServiceConfiguration both ARM and classic virtual networks are
   * supported. For more details, see:
   * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
   * @property {string} [pool.networkConfiguration.dynamicVNetAssignmentScope]
   * Possible values include: 'none', 'job'
   * @property {object} [pool.networkConfiguration.endpointConfiguration] Pool
   * endpoint configuration is only supported on pools with the
   * virtualMachineConfiguration property.
   * @property {array}
   * [pool.networkConfiguration.endpointConfiguration.inboundNATPools] The
   * maximum number of inbound NAT pools per Batch pool is 5. If the maximum
   * number of inbound NAT pools is exceeded the request fails with HTTP status
   * code 400.
   * @property {object} [pool.startTask]
   * @property {string} [pool.startTask.commandLine] The command line does not
   * run under a shell, and therefore cannot take advantage of shell features
   * such as environment variable expansion. If you want to take advantage of
   * such features, you should invoke the shell in the command line, for
   * example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in
   * Linux. If the command line refers to file paths, it should use a relative
   * path (relative to the task working directory), or use the Batch provided
   * environment variable
   * (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
   * @property {object} [pool.startTask.containerSettings] When this is
   * specified, all directories recursively below the AZ_BATCH_NODE_ROOT_DIR
   * (the root of Azure Batch directories on the node) are mapped into the
   * container, all task environment variables are mapped into the container,
   * and the task command line is executed in the container.
   * @property {string} [pool.startTask.containerSettings.containerRunOptions]
   * These additional options are supplied as arguments to the "docker create"
   * command, in addition to those controlled by the Batch Service.
   * @property {string} [pool.startTask.containerSettings.imageName] This is
   * the full image reference, as would be specified to "docker pull". If no
   * tag is provided as part of the image name, the tag ":latest" is used as a
   * default.
   * @property {object} [pool.startTask.containerSettings.registry] This
   * setting can be omitted if was already provided at pool creation.
   * @property {string}
   * [pool.startTask.containerSettings.registry.registryServer] If omitted, the
   * default is "docker.io".
   * @property {string} [pool.startTask.containerSettings.registry.userName]
   * @property {string} [pool.startTask.containerSettings.registry.password]
   * @property {array} [pool.startTask.resourceFiles] Files listed under this
   * element are located in the task's working directory.
   * @property {array} [pool.startTask.environmentSettings]
   * @property {object} [pool.startTask.userIdentity] If omitted, the task runs
   * as a non-administrative user unique to the task.
   * @property {string} [pool.startTask.userIdentity.userName] The userName and
   * autoUser properties are mutually exclusive; you must specify one but not
   * both.
   * @property {object} [pool.startTask.userIdentity.autoUser] The userName and
   * autoUser properties are mutually exclusive; you must specify one but not
   * both.
   * @property {string} [pool.startTask.userIdentity.autoUser.scope] The
   * default value is task. Possible values include: 'task', 'pool'
   * @property {string} [pool.startTask.userIdentity.autoUser.elevationLevel]
   * The default value is nonAdmin. Possible values include: 'nonAdmin',
   * 'admin'
   * @property {number} [pool.startTask.maxTaskRetryCount] The Batch service
   * retries a task if its exit code is nonzero. Note that this value
   * specifically controls the number of retries. The Batch service will try
   * the task once, and may then retry up to this limit. For example, if the
   * maximum retry count is 3, Batch tries the task up to 4 times (one initial
   * try and 3 retries). If the maximum retry count is 0, the Batch service
   * does not retry the task. If the maximum retry count is -1, the Batch
   * service retries the task without limit.
   * @property {boolean} [pool.startTask.waitForSuccess] If true and the start
   * task fails on a compute node, the Batch service retries the start task up
   * to its maximum retry count (maxTaskRetryCount). If the task has still not
   * completed successfully after all retries, then the Batch service marks the
   * compute node unusable, and will not schedule tasks to it. This condition
   * can be detected via the node state and failure info details. If false, the
   * Batch service will not wait for the start task to complete. In this case,
   * other tasks can start executing on the compute node while the start task
   * is still running; and even if the start task fails, new tasks will
   * continue to be scheduled on the node. The default is false.
   * @property {array} [pool.certificateReferences] For Windows compute nodes,
   * the Batch service installs the certificates to the specified certificate
   * store and location. For Linux compute nodes, the certificates are stored
   * in a directory inside the task working directory and an environment
   * variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for
   * this location. For certificates with visibility of 'remoteUser', a 'certs'
   * directory is created in the user's home directory (e.g.,
   * /home/{user-name}/certs) and certificates are placed in that directory.
   * @property {array} [pool.applicationPackageReferences]
   * @property {array} [pool.applicationLicenses] The list of application
   * licenses must be a subset of available Batch service application licenses.
   * If a license is requested which is not supported, pool creation will fail.
   * The permitted licenses available on the pool are 'maya', 'vray', '3dsmax',
   * 'arnold'. An additional charge applies for each application license added
   * to the pool.
   * @property {array} [pool.userAccounts]
   * @property {array} [pool.metadata] The Batch service does not assign any
   * meaning to metadata; it is solely for the use of user code.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AutoPoolSpecification
   *
   * @returns {object} metadata of AutoPoolSpecification
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AutoPoolSpecification',
      type: {
        name: 'Composite',
        className: 'AutoPoolSpecification',
        modelProperties: {
          autoPoolIdPrefix: {
            required: false,
            serializedName: 'autoPoolIdPrefix',
            type: {
              name: 'String'
            }
          },
          poolLifetimeOption: {
            required: true,
            serializedName: 'poolLifetimeOption',
            type: {
              name: 'Enum',
              allowedValues: [ 'jobSchedule', 'job' ]
            }
          },
          keepAlive: {
            required: false,
            serializedName: 'keepAlive',
            type: {
              name: 'Boolean'
            }
          },
          pool: {
            required: false,
            serializedName: 'pool',
            type: {
              name: 'Composite',
              className: 'PoolSpecification'
            }
          }
        }
      }
    };
  }
}

module.exports = AutoPoolSpecification;
