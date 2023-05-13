import { ConversationContext } from 'src/background/types'
export interface Answer {
  text: string
  messageId: string
  conversationId: string
  parentMessageId: string
  conversationContext: ConversationContext
}
