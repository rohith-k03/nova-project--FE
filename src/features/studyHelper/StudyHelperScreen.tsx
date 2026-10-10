import React, { useState } from 'react';
import { Screen, Header, Select, ChipRow, Button, ScreenFooter } from '../../components/common';
import {
  ExplainPanel,
  FlashcardPanel,
  QuizProgress,
  QuizPanel,
  QuizResult,
  modes,
  topics,
  topicOptions,
  cheers,
} from './components';
import { spacing } from '../../theme';

export default function StudyHelperScreen({ navigation }) {
  const [topicId, setTopicId] = useState('photosynthesis');
  const [mode, setMode] = useState('quiz');
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const topic = topics[topicId];
  const total = topic.questions.length;
  const question = topic.questions[index];

  const restartQuiz = () => {
    setIndex(0);
    setPicked(null);
    setScore(0);
    setFinished(false);
  };

  const changeTopic = (id) => {
    setTopicId(id);
    setBookmarked(false);
    restartQuiz();
  };

  const handlePick = (choice) => {
    if (picked !== null) return;
    setPicked(choice);
    if (choice === question.answer) setScore((value) => value + 1);
  };

  const handleNext = () => {
    if (index + 1 >= total) {
      setFinished(true);
      return;
    }
    setIndex((value) => value + 1);
    setPicked(null);
  };

  const renderFooter = () => {
    if (mode !== 'quiz') return null;
    if (finished) {
      return (
        <ScreenFooter>
          <Button title="Try again" icon="refresh-outline" onPress={restartQuiz} />
        </ScreenFooter>
      );
    }
    return (
      <ScreenFooter>
        <Button
          title={index + 1 >= total ? 'See results' : 'Next question'}
          icon="arrow-forward"
          onPress={handleNext}
          disabled={picked === null}
        />
      </ScreenFooter>
    );
  };

  const renderBody = () => {
    if (mode === 'explain') return <ExplainPanel topic={topic} />;
    if (mode === 'flashcards') return <FlashcardPanel questions={topic.questions} />;
    if (finished) return <QuizResult score={score} total={total} />;
    return (
      <>
        <QuizProgress level={topic.level} total={total} current={index + 1} />
        <QuizPanel
          question={question}
          picked={picked}
          cheer={cheers[index % cheers.length]}
          onPick={handlePick}
        />
      </>
    );
  };

  return (
    <Screen scroll footer={renderFooter()}>
      <Header
        title="Study helper"
        onBack={() => navigation.goBack()}
        rightIcon={bookmarked ? 'bookmark' : 'bookmark-outline'}
        onRightPress={() => setBookmarked((value) => !value)}
      />
      <Select
        label="What are we learning?"
        icon="school-outline"
        value={topicId}
        options={topicOptions}
        onChange={changeTopic}
      />
      <ChipRow items={modes} activeId={mode} onChange={setMode} style={{ marginTop: spacing.xs }} />
      {renderBody()}
    </Screen>
  );
}
