const TrackCare = () => {
    return (
      <main>
        <div className="card">
          <h2>Track Your Symptoms</h2>
          <form>
            <input type="text" placeholder="How are you feeling today?" required />
            <input type="text" placeholder="Any symptoms?" />
            <button type="submit">Log Entry</button>
          </form>
        </div>
      </main>
    );
  };
  
  export default TrackCare;
  
  