import app from './app';
import connectDB from './utils/db';

const PORT = process.env.PORT || 3000;

const start = () => {
  try {
    connectDB(process.env.MONGO_URI!);
    app.listen(PORT, () =>
      console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
          .underline.bold
      )
    );
  } catch (error) {
    console.error('Database connection failed'.red.underline.bold, error);
    process.exit(1);
  }
};

start();
