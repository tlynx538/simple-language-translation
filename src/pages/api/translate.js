export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { text, source, target } = req.body;
  
      try {
        const params = new URLSearchParams({
          client: 'at',
          dj: '1',
          ie: 'UTF-8',
          oe: 'UTF-8',
          inputm: '2',
          otf: '2',
          sl: source,
          tl: target,
          q: text,
        });
  
        // Add multiple dt parameters
        ['t', 'ld', 'qca', 'rm', 'bd'].forEach(dt => {
          params.append('dt', dt);
        });
  
        const url = `https://translate.google.com/translate_a/single?${params.toString()}`;
  
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Mozilla/5.0',
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json();
  
        // Log the full response for debugging
        console.log('API Response:', JSON.stringify(data, null, 2));
  
        // Check if we have a valid response
        if (!data.sentences || !Array.isArray(data.sentences)) {
          throw new Error('Invalid response structure from API');
        }
  
        // Extract the translated text and additional information
        const translatedText = data.sentences.map(sentence => sentence.trans).join(' ');
  
        res.status(200).json({
          translatedText,
          originalText: text,
          sourceLanguage: data.src || source,  // Use detected language if available
          targetLanguage: target,
          confidence: data.confidence,
          dictionary: data.dict || [],         // Include dictionary data if available
        });
  
      } catch (error) {
        console.error('Translation error:', error);
        res.status(500).json({ 
          error: 'Translation failed', 
          message: error.message 
        });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).json({ error: 'Method not allowed' });
    }
  }