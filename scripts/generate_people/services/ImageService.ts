import path from 'path';
import { downloadImage } from '../imageDownloader';

/**
 * Service for handling profile images
 */
export class ImageService {
  private defaultProfilePictures = [
    '/images/divd-profilepicture-volunteer1.svg',
    '/images/divd-profilepicture-volunteer2.svg',
    '/images/divd-profilepicture-volunteer3.svg',
    '/images/divd-profilepicture-volunteer4.svg',
  ];

  /**
   * Process a profile image based on user preferences
   * @param picturePreference User's picture preference
   * @param placeholderChoice User's placeholder choice
   * @param profilePictureUrl URL of the user's profile picture
   * @param baseFileName Base file name for saving the image
   * @param imagesDir Directory to save images to
   * @returns Path to the profile image
   */
  async processProfileImage(
    picturePreference: string,
    placeholderChoice: string,
    profilePictureUrl: string | undefined,
    baseFileName: string,
    imagesDir: string,
    personName: string,
  ): Promise<string> {
    if (picturePreference === 'I want to use one of the placeholders') {
      return this.processPlaceholderChoice(placeholderChoice);
    } else if (profilePictureUrl) {
      return this.processUploadedImage(profilePictureUrl, baseFileName, imagesDir, personName);
    } else {
      return this.getRandomPlaceholder();
    }
  }

  /**
   * Process a placeholder choice
   * @param placeholderChoice User's placeholder choice
   * @returns Path to the selected placeholder image
   */
  private processPlaceholderChoice(placeholderChoice: string): string {
    if (placeholderChoice.startsWith('Option ')) {
      const optionNumber = parseInt(placeholderChoice.replace('Option ', ''), 10);
      if (optionNumber >= 1 && optionNumber <= 4) {
        const imagePath = this.defaultProfilePictures[optionNumber - 1];
        console.log(`Using placeholder image: ${imagePath}`);
        return imagePath;
      }
    }

    // Fallback to random placeholder
    const randomPlaceholder = this.getRandomPlaceholder();
    console.log(`Invalid placeholder format, using random placeholder: ${randomPlaceholder}`);
    return randomPlaceholder;
  }

  /**
   * Process an uploaded image
   * @param imageUrl URL of the uploaded image
   * @param baseFileName Base file name for saving the image
   * @param imagesDir Directory to save images to
   * @returns Path to the saved image
   */
  private async processUploadedImage(
    imageUrl: string,
    baseFileName: string,
    imagesDir: string,
    personName: string,
  ): Promise<string> {
    try {
      const fullImagePath = path.join(imagesDir, baseFileName);
      const savedPath = await downloadImage(imageUrl, fullImagePath);
      const localImagePath = `/images/people/profile-pictures/${path.basename(savedPath)}`;
      console.log(`Profile picture processed: ${localImagePath}`);
      return localImagePath;
    } catch (error) {
      console.error(`Failed to download image for ${personName}:`, error);
      return this.getRandomPlaceholder();
    }
  }

  /**
   * Get a random placeholder image
   * @returns Path to a random placeholder image
   */
  private getRandomPlaceholder(): string {
    return this.defaultProfilePictures[Math.floor(Math.random() * this.defaultProfilePictures.length)];
  }
}
