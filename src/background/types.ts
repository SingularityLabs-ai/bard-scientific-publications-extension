import { Answer } from '../messaging'

export type Event =
  | {
      type: 'answer'
      data: Answer
    }
  | {
      type: 'done'
    }

export interface GenerateAnswerParams {
  prompt: string
  onEvent: (event: Event) => void
  signal?: AbortSignal
  conversationId?: string
  parentMessageId?: string
}

export interface Provider {
  generateAnswer(params: GenerateAnswerParams): Promise<{ cleanup?: () => void }>
}

// export interface SendMessageParams {
//   prompt: string
//   onEvent: (event: Event) => void
//   signal?: AbortSignal
// }
