
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
    const speechOutput = `Hello Nationwide Hackathon. I am your home advisor. Buying a home is the biggest and most complex purchase most people will make. Fortunately I work with a great team of financial advisors and we can develop a personalized plan to help buy your first home. To get started, tell me about the home you are looking for.`
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'I didn\'t catch that. What type of home are you looking for?;'
    const shouldEndSession = false;

    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function getTestIntent(intent, session, callback) {
    // If we wanted to initialize the session to have some attributes we could add those here.
    const sessionAttributes = {};
    const cardTitle = 'Homes In Palo Alto';
    const speechOutput = `it is: ${intent.name}`
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'I didn\'t catch that. What type of home are you looking for?';
    const shouldEndSession = false;

    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}
function getCityNameForZip(intent, session, callback) {
    // If we wanted to initialize the session to have some attributes we could add those here.
    const sessionAttributes = {};
    const cardTitle = 'Homes In Palo Alto';
    const speechOutput = `Looking at the prices on Zillow for two bedroom townhouses in Palo Alto, the average price is 500,000 dollars. Do you know how much you want to put for a down payment?`
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'I didn\'t catch that. What type of home are you looking for?';
    const shouldEndSession = false;

    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function getCityNameForZip(intent, session, callback) {
    // If we wanted to initialize the session to have some attributes we could add those here.
    const sessionAttributes = {};
    const cardTitle = 'Homes In Palo Alto';
    const speechOutput = `Looking at the prices on Zillow for two bedroom townhouses in Palo Alto, the average price is 500,000 dollars. Do you know how much you want to put for a down payment?`
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
    const speechOutput = `We recommend a 20% downpayment on your first home purchase, plus an additional 5% of funds in reserve. Can I access your bank account to design your savings plan?`
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
    const speechOutput = `You have 50,000 dollars in your savings account, which is 40% of the proposed mortgage. Your savings has been growing at 4,000 dollars per month. If you continue at this rate, we will have saved enough for your downpayment in 19 months. `
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'I didn\'t catch that. How much should we use?';
    const shouldEndSession = false;

    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function getMortgageForPlan(intent, session, callback) {
    // If we wanted to initialize the session to have some attributes we could add those here.
    const sessionAttributes = {};
    const cardTitle = 'Mortgage Amount: $75,000 in 19 months';
    const speechOutput = `I've saved your plan. You can ask me about your saving progress at any time, and we can update your plan if circumstances change. Let's move onto your mortgage terms. With your credit score of 750 and current market rates, I expect you will pay five percent interest.`
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'I didn\'t catch that. Should we proceed with this plan?';
    const shouldEndSession = false;

    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}



function getSavingsPlan(intent, session, callback) {
    // If we wanted to initialize the session to have some attributes we could add those here.
    const sessionAttributes = {};
    const cardTitle = 'Savings Plan: $75,000';
    const speechOutput = `Okay, 50,000 dollars is 40% of the 125,000 dollars we reccomend saving. Your savings has been growing at 4,000 dollars per month over the last year. If you continue saving at this rate, you will have saved enough for your downpayment in 19 months. `
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'I didn\'t catch that. How much of your savings will you use?';
    const shouldEndSession = false;

    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function getTalkToAdvisor(intent, session, callback) {
    // If we wanted to initialize the session to have some attributes we could add those here.
    const sessionAttributes = {};
    const cardTitle = 'Human Advisor: Call scheduled for Monday';
    const speechOutput = 'Our human advisors don\'t work on the weekend, but I will have someone call you on Monday. Nationwide is on your side.'; 
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'would you like to talk to a human advisor?';
    const shouldEndSession = false;

    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function handleSessionEndRequest(callback) {
    const cardTitle = 'Session Ended';
    const speechOutput = 'Thank you for using Home Advisor. Nationwide is on your side.';
    // Setting this to true ends the session and exits the skill.
    const shouldEndSession = true;

    callback({}, buildSpeechletResponse(cardTitle, speechOutput, null, shouldEndSession));
}

function whatsMyMonthlyPayment(principal, duration, rate) {
    var amt = parseInt(principal), 
        apr  = rate/1200,
        term = duration * 12;
    return Math.round(amt*(apr * Math.pow((1 + apr), term))/(Math.pow((1 + apr), term) - 1));
}


function getMonthlyPayment(intent, session, callback) {
    let cardTitle = '';
    const principal = intent.slots.principal.value;
    const rate = intent.slots.rate.value;
    const duration = intent.slots.term.value;
    const sessionAttributes = {
        principal, rate, duration
    };
    const monthlyPayment = whatsMyMonthlyPayment(principal, duration, rate);
    const shouldEndSession = false;
    const speechOutput = `Your mortgage would be ${monthlyPayment} dollars per month`;
    const repromptText = "I didn't catch that.";

    callback(sessionAttributes,
         buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function getMonthlyPaymentFixed(intent, session, callback) {
    const sessionAttributes = {};
    const principal = 400000//intent.slots.principal.value;
    const rate = 5; //parseInt(intent.slots.rate);
    const duration = 30; //parseInt(intent.slots.duration);
    const cardTitle = '30 year mortgage';
    const monthlyPayment = whatsMyMonthlyPayment(principal, duration, rate);
    const totalInterest = calculateTotalInterestOnMortgage(principal, duration, rate);
    const shouldEndSession = false;
    const speechOutput = `A 30 year mortgage would be ${monthlyPayment} dollars per month and you would pay a total of ${totalInterest} dollars in interest over ${duration} years.`;
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'I didn\'t catch that. What were the mortgage parameters?';

    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}


function getMonthlyPaymentFixed2(intent, session, callback) {
    console.log(intent)
    const sessionAttributes = {};
    const principal = 400000//intent.slots.principal.value;
    const rate = 5; //parseInt(intent.slots.rate);
    const duration = 15; //parseInt(intent.slots.duration);
    const cardTitle = '15 year calculateTotalInterestOnMortgage';
    const monthlyPayment = whatsMyMonthlyPayment(principal, duration, rate);
    const totalInterest = calculateTotalInterestOnMortgage(principal, duration, rate);
    const shouldEndSession = false;
    const speechOutput = `Your mortgage would be ${monthlyPayment} dollars per month and you would pay a total of ${totalInterest} dollars in interest over ${duration} years.`;
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'I didn\'t catch that. What were the mortgage parameters?'

    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function calculateTotalInterestOnMortgage(principal, duration, rate) {
    // take the monthly rate and multiple by the number of months of the duration
    return Math.round((whatsMyMonthlyPayment(principal, duration, rate) * 12 * duration) - principal);
}

function getTotalInterest(intent, session, callback) {
    
    const principal = parseInt(intent.slots.principal.value);
    const rate = parseInt(intent.slots.rate.value);
    const duration = parseInt(intent.slots.term.value);
    const sessionAttributes = {
        principal, rate, duration
    };
    const totalInterest = calculateTotalInterestOnMortgage(principal, duration, rate);
    let cardTitle = 'Total Interest: ' + totalInterest;
    const shouldEndSession = false;
    const speechOutput = `You would pay a total of ${totalInterest} dollars in interest over ${duration} years`;
    const repromptText = "I didn't catch that.";

    callback(sessionAttributes,
         buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

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
        getTotalInterest(intent, session, callback);  
    } else if (intentName === 'howMuchMonthlyPayment') {
        getMonthlyPayment(intent, session, callback);  
    } else if (intentName === 'HowMuchMonthlyPaymentFixed') {
        getMonthlyPaymentFixed(intentRequest, session, callback);  
    } else if (intentName === 'testIntent') {
        getTestIntent(intent, session, callback); 
    } else if (intentName === 'howMuchMonthlyPaymentDeux') {
        getMonthlyPaymentFixed2(intentRequest, session, callback); 
    } else if (intentName === 'soundsLikeAPlan') {
        getMortgageForPlan(intentRequest, session, callback);   
    } else if (intentName === 'talkToAdvisor') {
        getTalkToAdvisor(intentRequest, session, callback);  
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
