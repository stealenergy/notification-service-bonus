import { Replace } from "../helpers/replace";
import { Content } from "./content";

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createAt: Date;
}

export class Notification {
  private props: NotificationProps;
  // private category: string;

  constructor(props: Replace<NotificationProps, {createAt?: Date}>) {
    this.props =  {
        ...props,
        createAt: props.createAt ?? new Date(),
    };
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }
  public get recipientId(): string {
    return this.props.recipientId;
  }
  public set Content(content: Content) {
    this.props.content = content;
  }
  public get content(): Content {
    return this.props.content;
  }
  public set category(category: string) {
    this.props.category = category;
  }
  public get category(): string {
    return this.props.category;
  }
  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }
  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public get createAt(): Date {
    return this.props.createAt;
  }
}