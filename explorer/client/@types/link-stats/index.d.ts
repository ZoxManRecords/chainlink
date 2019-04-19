interface IJobRun {
  id: number
  runId: string
  jobId: string
  status: string
  type: string
  requester: string
  requestId: string
  txHash: string
  error?: string
  createdAt: string
  completedAt?: string
  taskRuns: ITaskRun[]
}

interface ITaskRun {
  id: number
  type: string
  status: string
  error?: string
}
