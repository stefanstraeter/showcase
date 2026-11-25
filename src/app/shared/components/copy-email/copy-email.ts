import { Component, input, signal } from '@angular/core';

const COPY_FEEDBACK_MS = 2000;

@Component({
  imports: [],
  selector: 'app-copy-email',
  styleUrl: './copy-email.scss',
  templateUrl: './copy-email.html',
})
export class CopyEmail {
  readonly email = input.required<string>();
  protected readonly isCopied = signal<boolean>(false);
  private resetTimer?: number;

  /**
   * Copies the email address to the clipboard and shows the feedback message.
   * Logs an error if the browser denies access to the clipboard.
   */
  protected async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email());
      this.showFeedback();
    } catch (error) {
      console.error('Could not copy email address', error);
    }
  }

  /**
   * Shows the feedback message and hides it again after a short delay.
   * A running timer is cancelled first, so quick repeated clicks do not hide it too early.
   */
  private showFeedback(): void {
    window.clearTimeout(this.resetTimer);
    this.isCopied.set(true);
    this.resetTimer = window.setTimeout(() => this.isCopied.set(false), COPY_FEEDBACK_MS);
  }
}
