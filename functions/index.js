const vision = require('@google-cloud/vision');
const { Firestore } = require('@google-cloud/firestore');

const client = new vision.ImageAnnotatorClient();
const firestore = new Firestore();

/**
 * Triggered from a change to a Cloud Storage bucket.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */
exports.onImageUpload = async (event, context) => {
    const gcsEvent = event;
    console.log(`Processing file: ${gcsEvent.name}`);
    const [result] = await client.documentTextDetection(
        `gs://${gcsEvent.bucket}/${gcsEvent.name}`
    );

    const fullTextAnnotation = result.fullTextAnnotation;
    console.log(fullTextAnnotation?.text);
    const document = firestore.doc('notes/'+gcsEvent.name);
    await document.set({
      title: gcsEvent.name,
      body: fullTextAnnotation?.text,
    });

    return fullTextAnnotation?.text;
};
