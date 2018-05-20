
'use strict';

/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills Kit.
 * The Intent Schema, Custom Slots, and Sample Utterances for this skill, as well as
 * testing instructions are located at http://amzn.to/1LzFrj6
 *
 * For additional samples, visit the Alexa Skills Kit Getting Started guide at
 * http://amzn.to/1LGWsLG
 */


// --------------- Helpers that build all of the responses -----------------------

function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: 'PlainText',
            text: output,
        },
        card: {
            type: 'Simple',
            title: `SessionSpeechlet - ${title}`,
            content: `SessionSpeechlet - ${output}`,
        },
        reprompt: {
            outputSpeech: {
                type: 'PlainText',
                text: repromptText,
            },
        },
        shouldEndSession,
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: '1.0',
        sessionAttributes,
        response: speechletResponse,
    };
}


// --------------- Functions that control the skill's behavior -----------------------

function getWelcomeResponse(callback) {
    // If we wanted to initialize the session to have some attributes we could add those here.
    const sessionAttributes = {};
    const cardTitle = 'Nationwide Home Advisor';
    const speechOutput = `Hello Nationwide Hackathon. I am home advisor. Buying a home is the biggest and most complex purchase most people ever make. Luckily I work with a great team of financial advisors and we will develop a personalized plan to help buy your first home. To get started, tell me about the home you are looking for. What zip code do you want to live in?`
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'I didn\'t catch that. What zip code do you want to live in?;'
    const shouldEndSession = false;

    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function getCityNameForZip(intent, session, callback) {
    // If we wanted to initialize the session to have some attributes we could add those here.
    const sessionAttributes = {};
    const cardTitle = 'Homes In Palo Alto';
    const speechOutput = `Looking at the prices on Zillow for two bedroom townhouses in Palo Alto, I see that the average price is 500,000 dollars. Do you know how much you want to put for a down payment?`
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'I didn\'t catch that. What type of home are you looking for?';
    const shouldEndSession = false;

    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function getRecommendedDownPayment(intent, session, callback) {
    // If we wanted to initialize the session to have some attributes we could add those here.
    const sessionAttributes = {};
    const cardTitle = 'Recommended Down Payment: 20%';
    const speechOutput = `We recommend a 20% downpayment on your first home purchase, and keeping an additional 5% of funds in reserve for emergencies and unexpected expenses. Can I access your bank account details to design a personalized savings plan?`
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'I didn\'t catch that. Can I access bank details?';
    const shouldEndSession = false;

    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function getBankAccountInfo(intent, session, callback) {
    // If we wanted to initialize the session to have some attributes we could add those here.
    const sessionAttributes = {};
    const cardTitle = 'Bank Balance: $50,000';
    const speechOutput = `Accessing now. It looks like you have 50,000 dollars in your savings account. How much of this would you like to use towards the downpayment?`
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'I didn\'t catch that. How much should we use?';
    const shouldEndSession = false;

    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function getSavingsPlan(intent, session, callback) {
    // If we wanted to initialize the session to have some attributes we could add those here.
    const sessionAttributes = {};
    const cardTitle = 'Savings Plan: $75,000';
    const speechOutput = `Okay, 50,000 dollars is 40% of the 125,000 dollars we reccomend saving. Let's figure out how to save the additional 75,000. Looking at your monthly account balance over the last year, your savings has been growing at 4,000 dollars per month. If you continue saving at this rate, you will have saved enough for your downpayment in 19 months. Do you think you will be able to maintain saving at this rate for 19 months?`
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'I didn\'t catch that. Can I access bank details?';
    const shouldEndSession = false;

    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function handleSessionEndRequest(callback) {
    const cardTitle = 'Session Ended';
    const speechOutput = 'Thank you using Home Advisor. Nationwide is on your side.';
    // Setting this to true ends the session and exits the skill.
    const shouldEndSession = true;

    callback({}, buildSpeechletResponse(cardTitle, speechOutput, null, shouldEndSession));
}

function whatsMyMonthlyPayment(principal, duration, rate) {
    var amt = principal, 
        apr  = rate/1200,
        term = duration * 12;
    return Math.round(amt*(apr * Math.pow((1 + apr), term))/(Math.pow((1 + apr), term) - 1));
}


function getMonthlyPayment(intent, session, callback) {
    let cardTitle = '';
    const principal = intent.slots.principal;
    const rate = intent.slots.rate;
    const duration = intent.slots.duration;
    const sessionAttributes = {
        principal, rate, duration
    };
    const monthlyPayment = whatsMyMonthlyPayment(principal, rate, duration);
    const shouldEndSession = false;
    const speechOutput = `Your mortgage would be ${monthlyPayment} dollars per month`;
    const repromptText = "You can ask me your favorite color by saying, what's my favorite color?";

    callback(sessionAttributes,
         buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function calculateTotalInterestOnMortgage(principal, duration, rate) {
    // take the monthly rate and multiple by the number of months of the duration
    return Math.round((whatsMyMonthlyPayment(principal, duration, rate) * 12 * duration) - principal);
}

function getTotalInterest(intent, session, callback) {
    let cardTitle = '';
    const principal = intent.slots.principal;
    const rate = intent.slots.rate;
    const duration = intent.slots.duration;
    const sessionAttributes = {
        principal, rate, duration
    };
    const totalInterest = calculateTotalInterestOnMortgage(principal, rate, duration);
    const shouldEndSession = false;
    const speechOutput = `You would pay a total of ${totalInterest} dollars in interest over ${duration} years`;
    const repromptText = "You can ask me your favorite color by saying, what's my favorite color?";

    callback(sessionAttributes,
         buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

/**
 * Sets the color in the session and prepares the speech to reply to the user.

function setColorInSession(intent, session, callback) {
    const cardTitle = intent.name;
    const favoriteColorSlot = intent.slots.Color;
    let repromptText = '';
    let sessionAttributes = {};
    const shouldEndSession = false;
    let speechOutput = '';

    if (favoriteColorSlot) {
        const favoriteColor = favoriteColorSlot.value;
        sessionAttributes = createFavoriteColorAttributes(favoriteColor);
        speechOutput = `I now know your favorite color is ${favoriteColor}. You can ask me ` +
            "your favorite color by saying, what's my favorite color?";
        repromptText = "You can ask me your favorite color by saying, what's my favorite color?";
    } else {
        speechOutput = "I'm not sure what your favorite color is. Please try again.";
        repromptText = "I'm not sure what your favorite color is. You can tell me your " +
            'favorite color by saying, my favorite color is red';
    }

    callback(sessionAttributes,
         buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function getColorFromSession(intent, session, callback) {
    let favoriteColor;
    const repromptText = null;
    const sessionAttributes = {};
    let shouldEndSession = false;
    let speechOutput = '';

    if (session.attributes) {
        favoriteColor = session.attributes.favoriteColor;
    }

    if (favoriteColor) {
        speechOutput = `Your favorite color is ${favoriteColor}. Goodbye.`;
        shouldEndSession = true;
    } else {
        speechOutput = "I'm not sure what your favorite color is, you can say, my favorite color " +
            ' is red';
    }

    // Setting repromptText to null signifies that we do not want to reprompt the user.
    // If the user does not respond or says something that is not understood, the session
    // will end.
    callback(sessionAttributes,
         buildSpeechletResponse(intent.name, speechOutput, repromptText, shouldEndSession));
}
**/

// --------------- Events -----------------------

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log(`onSessionStarted requestId=${sessionStartedRequest.requestId}, sessionId=${session.sessionId}`);
}

/**
 * Called when the user launches the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log(`onLaunch requestId=${launchRequest.requestId}, sessionId=${session.sessionId}`);

    // Dispatch to your skill's launch.
    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log(`onIntent requestId=${intentRequest.requestId}, sessionId=${session.sessionId}`);

    const intent = intentRequest.intent;
    const intentName = intentRequest.intent.name;

    // Dispatch to your skill's intent handlers
    if (intentName === 'buyFirstHomeInit') {
        getWelcomeResponse(callback);
    } else if (intentName === 'likeToLive') {
        getCityNameForZip(intentRequest, session, callback);  
    } else if (intentName === 'recommendDownPayment') {
        getRecommendedDownPayment(intentRequest, session, callback);  
    } else if (intentName === 'accessBankAccount') {
        getBankAccountInfo(intentRequest, session, callback);  
    } else if (intentName === 'howMuchForDownPayment') {
        getSavingsPlan(intentRequest, session, callback);
    } else if (intentName === 'howMuchTotalInterest') {
        getTotalInterest(intentRequest, session, callback);  
    } else if (intentName === 'howMuchMonthlyPayment') {
        getMonthlyPayment(intentRequest, session, callback);  
    } else if (intentName === 'AMAZON.HelpIntent') {
        getWelcomeResponse(callback);
    } else if (intentName === 'AMAZON.StopIntent' || intentName === 'AMAZON.CancelIntent') {
        handleSessionEndRequest(callback);
    } else {
        throw new Error('Invalid intent');
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log(`onSessionEnded requestId=${sessionEndedRequest.requestId}, sessionId=${session.sessionId}`);
    // Add cleanup logic here
}


// --------------- Main handler -----------------------

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = (event, context, callback) => {
    try {
        console.log(`event.session.application.applicationId=${event.session.application.applicationId}`);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */
        /*
        if (event.session.application.applicationId !== 'amzn1.echo-sdk-ams.app.[unique-value-here]') {
             callback('Invalid Application ID');
        }
        */

        if (event.session.new) {
            onSessionStarted({ requestId: event.request.requestId }, event.session);
        }

        if (event.request.type === 'LaunchRequest') {
            onLaunch(event.request,
                event.session,
                (sessionAttributes, speechletResponse) => {
                    callback(null, buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === 'IntentRequest') {
            onIntent(event.request,
                event.session,
                (sessionAttributes, speechletResponse) => {
                    callback(null, buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === 'SessionEndedRequest') {
            onSessionEnded(event.request, event.session);
            callback();
        }
    } catch (err) {
        callback(err);
    }
};
