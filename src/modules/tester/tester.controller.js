import Tester from './tester.model';

export async function signUp(req, res) {
    try {
        const tester = await Tester.create(req.body);
        return res.status(201).json(tester);
    }
    catch (e) {
        return res.status(500).json(e);
    }
}

export function login(req, res, next) {
    res.status(200).json(req.tester);

    return next();
}